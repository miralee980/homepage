import React, { useCallback, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { isEqual, isNil, isNull } from "lodash";
import * as Events from "./Events";
import usePrevious from "./usePrevValue";

if (!global._babelPolyfill) {
	require("babel-polyfill");
}

const DEFAULT_ANIMATION_TIMER = 1000;
const DEFAULT_ANIMATION = "ease-in-out";
const DEFAULT_CONTAINER_HEIGHT = "100vh";
const DEFAULT_CONTAINER_WIDTH = "100vw";
const DEFAULT_COMPONENT_INDEX = 0;
const DEFAULT_COMPONENTS_TO_RENDER_LENGTH = 0;

const DEFAULT_ANIMATION_TIMER_BUFFER = 200;
const KEY_UP = 38;
const KEY_DOWN = 40;
const DISABLED_CLASS_NAME = "rps-scroll--disabled";

let previousTouchMove = null;
let isScrolling = false;
let isMounted = false;
let isBodyScrollEnabled = true;
let isTransitionAfterComponentsToRenderChanged = false;
const containers = [];

const ReactPageScroller = ({
	animationTimer,
	animationTimerBuffer,
	blockScrollDown,
	blockScrollUp,
	children,
	containerHeight,
	containerWidth,
	customPageNumber,
	handleScrollUnavailable,
	pageOnChange,
	renderAllPagesOnFirstRender,
	transitionTimingFunction,
	hiddenBottomScroll,
	hiddenBottomIndex,
	checkVideo,
}) => {
	var isTimer = false;
	const [componentIndex, setComponentIndex] = useState(DEFAULT_COMPONENT_INDEX);
	const [prevComponentIndex, setPrevComponentIndex] = useState(
		DEFAULT_COMPONENT_INDEX
	);
	const [componentsToRenderLength, setComponentsToRenderLength] = useState(
		DEFAULT_COMPONENTS_TO_RENDER_LENGTH
	);
	// const prevComponentIndex = usePrevious(componentIndex);
	const pageContainer = useRef(null);

	const addNextComponent = useCallback(
		componentsToRenderOnMountLength => {
			let tempComponentsToRenderLength = 0;

			if (!isNil(componentsToRenderOnMountLength)) {
				tempComponentsToRenderLength = componentsToRenderOnMountLength;
			}

			tempComponentsToRenderLength = Math.max(
				tempComponentsToRenderLength,
				componentsToRenderLength
			);

			if (tempComponentsToRenderLength <= componentIndex + 1) {
				if (!isNil(children[componentIndex + 1])) {
					tempComponentsToRenderLength++;
				}
			}
			setComponentsToRenderLength(tempComponentsToRenderLength);
		},
		[children, componentIndex, componentsToRenderLength]
	);

	const checkRenderOnMount = useCallback(() => {
		if (renderAllPagesOnFirstRender) {
			setComponentsToRenderLength(React.Children.count(children));
		} else if (!isNil(children[DEFAULT_COMPONENT_INDEX + 1])) {
			addNextComponent(DEFAULT_COMPONENTS_TO_RENDER_LENGTH + 1);
		}
	}, [addNextComponent, children, renderAllPagesOnFirstRender]);

	const disableScroll = useCallback(() => {
		if (isBodyScrollEnabled) {
			isBodyScrollEnabled = false;
			window.scrollTo({
				left: 0,
				top: 0,
				behavior: "smooth",
			});
			document.body.classList.add(DISABLED_CLASS_NAME);
			document.documentElement.classList.add(DISABLED_CLASS_NAME);
		}
	}, []);

	const enableDocumentScroll = useCallback(() => {
		if (!isBodyScrollEnabled) {
			isBodyScrollEnabled = true;
			document.body.classList.remove(DISABLED_CLASS_NAME);
			document.documentElement.classList.remove(DISABLED_CLASS_NAME);
		}
	}, []);

	const setRenderComponents = useCallback(() => {
		const newComponentsToRender = [];

		let i = 0;

		while (i < componentsToRenderLength && !isNil(children[i])) {
			containers[i] = true;
			newComponentsToRender.push(
				<div key={i} style={{ height: "100vh", width: "100vw" }}>
					{React.cloneElement(children[i], { ...children[i].props })}
				</div>
			);
			i++;
		}

		return newComponentsToRender;
	}, [children, componentsToRenderLength]);

	const scrollWindowDown = useCallback(() => {
		if (!isScrolling && !blockScrollDown && !isTimer) {
			if (!isNil(containers[componentIndex + 1])) {
				disableScroll();
				isScrolling = true;
				isTimer = true;
				pageContainer.current.style.transform = `translate3d(0, ${
					(componentIndex + 1) * -100
				}%, 0)`;

				setTimeout(() => {
					if (isMounted) {
						if (componentIndex + 1 === 0) checkVideo(true);
						else checkVideo(false);
						isTimer = false;
						setPrevComponentIndex(componentIndex);
						setComponentIndex(prevState =>
							prevState + 1 > hiddenBottomIndex + 1
								? hiddenBottomIndex + 1
								: prevState + 1
						);
					}
				}, animationTimer + animationTimerBuffer);
			} else {
				enableDocumentScroll();
				if (hiddenBottomScroll) {
					hiddenBottomScroll(false);
				}

				if (handleScrollUnavailable) {
					handleScrollUnavailable(false);
				}
			}
		}
	}, [
		animationTimer,
		animationTimerBuffer,
		blockScrollDown,
		componentIndex,
		disableScroll,
		enableDocumentScroll,
		handleScrollUnavailable,
	]);

	const scrollWindowUp = useCallback(() => {
		console.log(
			"isScrolling :" +
				isScrolling +
				"blockScrollUp :" +
				blockScrollUp +
				"isTimer :" +
				isTimer
		);
		if (!isScrolling && !blockScrollUp && !isTimer) {
			console.log("componentIndex :" + componentIndex);
			if (!isNil(containers[componentIndex - 1])) {
				disableScroll();
				isScrolling = true;
				isTimer = true;
				pageContainer.current.style.transform = `translate3d(0, ${
					(componentIndex - 1) * -100
				}%, 0)`;

				setTimeout(() => {
					if (isMounted) {
						isTimer = false;
						if (componentIndex - 1 === 0) checkVideo(true);
						else checkVideo(false);
						setPrevComponentIndex(componentIndex);
						setComponentIndex(prevState =>
							prevState - 1 < 0 ? 0 : prevState - 1
						);
					}
				}, animationTimer + animationTimerBuffer);
			} else {
				enableDocumentScroll();
				if (handleScrollUnavailable) {
					handleScrollUnavailable();
				}
			}
		}
	}, [
		animationTimer,
		animationTimerBuffer,
		blockScrollUp,
		componentIndex,
		disableScroll,
		enableDocumentScroll,
		handleScrollUnavailable,
	]);

	const touchMove = useCallback(
		event => {
			if (!isNull(previousTouchMove)) {
				if (event.touches[0].clientY > previousTouchMove) {
					console.log("UP");
					scrollWindowUp();
				} else {
					console.log("DOWN");
					scrollWindowDown();
				}
			} else {
				previousTouchMove = event.touches[0].clientY;
			}
		},
		[scrollWindowDown, scrollWindowUp]
	);

	const wheelScroll = useCallback(
		event => {
			if (event.deltaY < 0) {
				console.log("UP");
				scrollWindowUp();
			} else {
				console.log("DOWN");
				scrollWindowDown();
			}
		},
		[scrollWindowDown, scrollWindowUp]
	);

	const keyPress = useCallback(
		event => {
			if (isEqual(event.keyCode, KEY_UP)) {
				console.log("UP");
				scrollWindowUp();
			}
			if (isEqual(event.keyCode, KEY_DOWN)) {
				console.log("DOWN");
				scrollWindowDown();
			}
		},
		[scrollWindowDown, scrollWindowUp]
	);

	useEffect(() => {
		pageContainer.current.addEventListener(Events.TOUCHMOVE, touchMove);
		pageContainer.current.addEventListener(Events.KEYDOWN, keyPress);
		return () => {
			pageContainer.current.removeEventListener(Events.TOUCHMOVE, touchMove);
			pageContainer.current.removeEventListener(Events.KEYDOWN, keyPress);
		};
	}, [touchMove, keyPress]);

	useEffect(() => {
		isMounted = true;

		checkRenderOnMount();
		return () => {
			isMounted = false;
		};
	}, []);

	useEffect(() => {
		isScrolling = false;
		previousTouchMove = null;
		if (componentIndex > prevComponentIndex) {
			addNextComponent();
			if (componentIndex >= hiddenBottomIndex) {
				console.log("Show Bottom");
				if (hiddenBottomScroll) hiddenBottomScroll(false);
			}
		} else if (componentIndex < prevComponentIndex) {
			console.log(
				"prevComponentIndex:" +
					prevComponentIndex +
					"componentIndex:" +
					componentIndex
			);
			if (componentIndex <= hiddenBottomIndex) {
				console.log("Hidden Bottom");
				if (hiddenBottomScroll) hiddenBottomScroll(true);
			}
		}
	}, [addNextComponent, componentIndex, prevComponentIndex]);

	useEffect(() => {
		if (pageOnChange) {
			pageOnChange(componentIndex);
		}
	}, [pageOnChange, componentIndex]);

	useEffect(() => {
		if (
			!isNil(customPageNumber) &&
			!isEqual(customPageNumber, componentIndex)
		) {
			let newComponentsToRenderLength = componentsToRenderLength;
			if (!isEqual(componentIndex, customPageNumber) && !isTimer) {
				if (!isNil(containers[customPageNumber]) && !isScrolling) {
					isScrolling = true;
					// eslint-disable-next-line max-len
					isTimer = true;
					pageContainer.current.style.transform = `translate3d(0, ${
						customPageNumber * -100
					}%, 0)`;

					if (
						isNil(containers[customPageNumber]) &&
						!isNil(children[customPageNumber])
					) {
						newComponentsToRenderLength++;
					}

					setTimeout(() => {
						if (customPageNumber === 0) checkVideo(true);
						else checkVideo(false);
						isTimer = false;
						setPrevComponentIndex(componentIndex);
						setComponentIndex(customPageNumber);
						setComponentsToRenderLength(newComponentsToRenderLength);
					}, animationTimer + animationTimerBuffer);
				} else if (!isScrolling && !isNil(children[customPageNumber])) {
					for (let i = componentsToRenderLength; i <= customPageNumber; i++) {
						newComponentsToRenderLength++;
					}

					if (!isNil(children[customPageNumber])) {
						newComponentsToRenderLength++;
					}

					isScrolling = true;
					isTransitionAfterComponentsToRenderChanged = true;
					setComponentsToRenderLength(newComponentsToRenderLength);
				}
			}
		}
	}, [customPageNumber]);

	useEffect(() => {
		if (isTransitionAfterComponentsToRenderChanged && !isTimer) {
			isTransitionAfterComponentsToRenderChanged = false;
			isTimer = true;
			pageContainer.current.style.transform = `translate3d(0, ${
				customPageNumber * -100
			}%, 0)`;

			setTimeout(() => {
				if (customPageNumber === 0) checkVideo(true);
				else checkVideo(false);
				isTimer = false;
				setPrevComponentIndex(componentIndex);
				setComponentIndex(customPageNumber);
			}, animationTimer + animationTimerBuffer);
		}
	}, [
		animationTimer,
		animationTimerBuffer,
		componentsToRenderLength,
		customPageNumber,
	]);

	return (
		<div
			style={{
				height: containerHeight,
				width: containerWidth,
				overflow: "hidden",
			}}
		>
			<div
				ref={pageContainer}
				onWheel={wheelScroll}
				style={{
					height: "100%",
					width: "100%",
					transition: `transform ${animationTimer}ms ${transitionTimingFunction}`,
					outline: "none",
				}}
				tabIndex={0}
			>
				{setRenderComponents()}
			</div>
		</div>
	);
};

ReactPageScroller.propTypes = {
	animationTimer: PropTypes.number,
	animationTimerBuffer: PropTypes.number,
	blockScrollDown: PropTypes.bool,
	blockScrollUp: PropTypes.bool,
	children: PropTypes.any,
	containerHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	containerWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	customPageNumber: PropTypes.number,
	handleScrollUnavailable: PropTypes.func,
	pageOnChange: PropTypes.func,
	renderAllPagesOnFirstRender: PropTypes.bool,
	transitionTimingFunction: PropTypes.string,
	hiddenBottomScroll: PropTypes.func,
	hiddenBottomIndex: PropTypes.number,
	checkVideo: PropTypes.func,
};

ReactPageScroller.defaultProps = {
	animationTimer: DEFAULT_ANIMATION_TIMER,
	animationTimerBuffer: DEFAULT_ANIMATION_TIMER_BUFFER,
	transitionTimingFunction: DEFAULT_ANIMATION,
	containerHeight: DEFAULT_CONTAINER_HEIGHT,
	containerWidth: DEFAULT_CONTAINER_WIDTH,
	blockScrollUp: false,
	blockScrollDown: false,
};

export default ReactPageScroller;
