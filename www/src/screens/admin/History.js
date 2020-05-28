import React, { useState, useEffect } from "react";
import EditHistory from "./EditHistory";
import { Table, Space, Card, Empty, Button, Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
// import { format } from "mysql";

const History = () => {
  const [record, setRecord] = useState(null);
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
  }, []);

  const { confirm } = Modal;
  const deleteConfirm = record => {
    confirm({
      title: "Do you want to delete this item?",
      icon: <ExclamationCircleOutlined />,
      content: "연혁을 삭제하시겠습니까?",
      onOk() {
        console.log("OK");
        deleteApi(record);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const resetRecord = () => {
    console.log("resetRecord");
    setRecord(null);
  };

  const saveApi = record => {
    console.log(record); // API 연결
    resetRecord();
  };

  const updateApi = record => {
    console.log(record); // API 연결
    resetRecord();
  };

  const dumpRecord = () => {
    console.log("dumpRecord");
    var dump = {
      id: "",
      type: 0,
      did_at: new Date(),
      desc: "",
    };
    setRecord(dump);
  };

  const edit = (record: Item) => {
    console.log(record);
    setRecord(record);
  };

  const deleteApi = (record: Item) => {
    console.log(record);
    resetRecord();
    //Delete Api;
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
          <Button onClick={() => edit(record)}>수정</Button>
          <Button onClick={() => deleteConfirm(record)}>삭제</Button>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <h1>연혁 정보</h1>
      <Card
        title="연혁 목록"
        bordered={false}
        style={{ width: "90%", marginLeft: "5%", marginRight: "5%" }}
      >
        <Table dataSource={dataSource} columns={columns} />
      </Card>
      <br />
      <Card
        title="연혁 등록 및 수정"
        bordered={false}
        style={{ width: "90%", marginLeft: "5%", marginRight: "5%" }}
      >
        {record ? (
          <EditHistory
            record={record}
            reset={resetRecord}
            save={saveApi}
            update={updateApi}
          />
        ) : (
          <Empty
            image={Empty.PRESENTED_IMAGE_DEFAULT}
            imageStyle={{ height: 60 }}
            description={<span>새 연혁 등록</span>}
          >
            <Button onClick={dumpRecord}>Create New</Button>
          </Empty>
        )}
      </Card>
    </div>
  );
};

export default History;
