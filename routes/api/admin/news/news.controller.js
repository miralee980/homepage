const News = require("../../../../models/news");

exports.loadNews = (req, res) => {
	const respond = result => {
		console.log(result);
		if (result.length)
			res.send({
				status: "OK",
				message: "News Data",
				data: result,
			});
		else
			res.send({
				status: "Fail",
				message: "뉴스 데이터가 없습니다.",
			});
	};

	const onError = error => {
		res.status(403).json({
			status: "Fail",
			message: error.message,
		});
	};

	News.loadNews().then(respond).catch(onError);
};

exports.addNews = (req, res) => {
	var newsData = req.body.newsData;
	var brief = newsData.brief || "";
	var description = newsData.description || "";
	var data = [
		newsData.title,
		newsData.pub_at,
		newsData.image_url,
		newsData.link,
		brief,
		description,
	];
	const respond = result => {
		if (result.insertId > 0)
			res.send({
				status: "OK",
				message: "새로운 뉴스가 추가되었습니다.",
			});
		else
			res.send({
				status: "Fail",
				message: "새로운 뉴스 추가가 실패했습니다.",
			});
	};

	const onError = error => {
		res.status(403).json({
			status: "Fail",
			message: error.message,
		});
	};

	News.addNews(data).then(respond).catch(onError);
};

exports.updateNews = (req, res) => {
	var newsData = req.body.newsData;
	var brief = newsData.brief || "";
	var description = newsData.description || "";

	if (
		!newsData.hasOwnProperty("id") ||
		newsData.id < 1 ||
		newsData.id === null
	) {
		console.log("NewsData id is not a validate number.");
		res.status(403).json({
			status: "Fail",
			message: "NewsData id is not a validate number.",
		});
		return;
	}

	var data = [
		newsData.title,
		newsData.pub_at,
		newsData.image_url,
		newsData.link,
		brief,
		description,
		newsData.id,
	];

	const respond = result => {
		if (result.changedRows > 0)
			res.send({
				status: "OK",
				message: "뉴스가 수정되었습니다.",
			});
		else
			res.send({
				status: "Fail",
				message: "뉴스 수정이 실패했습니다.",
			});
	};

	const onError = error => {
		res.status(403).json({
			status: "Fail",
			message: error.message,
		});
	};

	News.updateNews(data).then(respond).catch(onError);
};

exports.delNews = (req, res) => {
	var id = req.body.id;

	if (id < 1 || id === null) {
		console.log("id is not a validate number.");
		res.status(403).json({
			status: "Fail",
			message: "Id is not a validate number.",
		});
		return;
	}
	const respond = result => {
		if (result.affectedRows > 0)
			res.send({
				status: "OK",
				message: "뉴스가 삭제되었습니다.",
			});
		else
			res.send({
				status: "Fail",
				message: "뉴스 삭제가 실패했습니다.",
			});
	};

	const onError = error => {
		res.status(403).json({
			status: "Fail",
			message: error.message,
		});
	};

	News.delNews(id).then(respond).catch(onError);
};
