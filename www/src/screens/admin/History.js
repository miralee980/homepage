import React, { Component, useState, useEffect } from "react";
import EditHistory from "./EditHistory";
import { Table, Space, Card, Empty, Button, Modal } from "antd";
import { ExclamationCircleOutlined} from "@ant-design/icons";
// import { format } from "mysql";

const TableHistory = (props) => {
  const [dataSource, setData] = useState(null);

  async function fetchData() {
    const res = await fetch("/history/loadHistory");
    res
      .json()
      .then(res => {
        setData(res);
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    fetchData();
    props.setHeight(window.innerHeight);
  }, []);

  const { confirm } = Modal;
  const deleteConfirm = record => {
    confirm({
      title: "Do you want to delete this item?",
      icon: <ExclamationCircleOutlined />,
      content: "연혁을 삭제하시겠습니까?",
      onOk() {
        console.log("OK");
        props.deleteApi(record);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const columns = [
    {
      title: "일자",
      key: "did_at",
      render: (_: any, record: Item) => (
        <Space size="middle">
          {record.did_at.slice(0, record.did_at.indexOf("T"))}
        </Space>
      ),
    },
    {
      title: "내용",
      dataIndex: "desc",
      key: "desc",
    },
    {
      title: "특징",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: Item) => (
        <Space size="middle">
          <Button onClick={() => props.edit(record)}>수정</Button>
          <Button onClick={() => deleteConfirm(record)}>삭제</Button>
        </Space>
      ),
    },
  ];

  return (
      <Card
        title="연혁 목록"
        bordered={false}
        style={{ width: "90%", marginLeft: "5%", marginRight: "5%" }}
      >
        <Table dataSource={dataSource} columns={columns} />
      </Card>
  );
}

const FromHistory = (props) => {
  return (
      <Card
        title="연혁 등록 및 수정"
        bordered={false}
        style={{ width: "90%", marginLeft: "5%", marginRight: "5%" }}
      >
        {props.record ? (
          <EditHistory
          scrollToFormHandler = {props.scrollToFormHandler}
          formHandlerRef = {props.formHandlerRef}
            record={props.record}
            reset={props.resetRecord}
            save={props.saveApi}
            update={props.updateApi}
          />
        ) : (
          <Empty
            image={Empty.PRESENTED_IMAGE_DEFAULT}
            imageStyle={{ height: 60 }}
            description={<span>새 연혁 등록</span>}
          >
            <Button onClick={props.dumpRecord}>Create New</Button>
          </Empty>
        )}
      </Card>
  );
}

class History extends Component {
  state = {record : null, height : 0};

  scrollToFormHandler = () => {
    console.log("scrollToFormHandler");
    window.scrollTo(0, this.state.height);
  }
  setHeight = (h) => {
    console.log("setHeight : "+ h);
    this.setState({height : h})
  }
  resetRecord = () => {
    console.log("resetRecord");
    this.setState({record : null})
  };

  saveApi = record => {
    console.log("saveApi record = "+record); // API 연결
    this.resetRecord();
  };

  updateApi = record => {
    console.log("updateApi id = "+record.id);
    this.resetRecord();
  };

  dumpRecord = () => {
    console.log("dumpRecord");
    var dump = {
      id: "",
      type: 0,
      did_at: new Date(),
      desc: "",
    };
    this.setState({record : dump})
  };

  edit = (record: Item) => {
    console.log("edit id = "+record.id);
    this.setState({record : record});
    this.scrollToFormHandler();
  };

  deleteApi = (record: Item) => {
    console.log("deleteApi id = "+record.id);
    this.resetRecord();
  };

  render() {
    return (
      <div>
        <h1>연혁 정보</h1>
        <TableHistory setHeight = {this.setHeight} deleteApi = {this.deleteApi} edit = {this.edit} />
        <br />
        <FromHistory scrollToFormHandler = {this.scrollToFormHandler} record = {this.state.record} resetRecord={this.resetRecord} saveApi = {this.saveApi} updateApi = {this.updateApi} dumpRecord = {this.dumpRecord}/>
      </div>
    )
  }
}

export default History;
