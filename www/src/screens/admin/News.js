import React, { useState, useEffect } from "react";
import EditNews from "./EditNews";
import { Table, Space, Card, Empty, Button, Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
// import { format } from "mysql";

const News = () => {
  const [record, setRecord] = useState(null);
  const [dataSource, setData] = useState(null);

  async function fetchData() {
    const res = await fetch("/news/loadNews");
    res
      .json()
      .then(res => setData(res))
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
      content: "뉴스를 삭제하시겠습니까?",
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
      title: 0,
      pub_at: new Date(),
      brief: "",
      description: "",
      image_url: "",
      link: "",
    };
    setRecord(dump);
  };

  const edit = (record: Item) => {
    console.log(record);
    setRecord(record);
  };

  const deleteApi = (record: Item) => {
    console.log(record);
    //Delete Api;
  };

  const columns = [
    {
      title: "이미지",
      key: "image_url",
      render: (_: any, record: Item) => (
        <Space size="middle">
          <img
            // src={require(`../..${record.image_url}`)}
            /*src={require("upload_files/1551859770.jpg")}*/
            src={require("../../upload_files/1590454079.jpg")}
            alt="news"
            style={{ width: "128px", height: "128px" }}
          />
        </Space>
      ),
    },
    {
      title: "일자",
      key: "pub_at",
      render: (_: any, record: Item) => (
        <Space size="middle">
          {record.pub_at.slice(0, record.pub_at.indexOf("T"))}
        </Space>
      ),
    },
    {
      title: "기사 제목",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "기사 원문 URL",
      dataIndex: "link",
      key: "link",
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: Item) => (
        <Space size="middle">
          <p onClick={() => edit(record)}>수정</p>
          <p onClick={() => deleteConfirm(record)}>삭제</p>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <h1>뉴스 관리</h1>
      <img
        src={require("upload_files/1551859770.jpg")}
        alt="news"
        style={{ width: "128px", height: "128px" }}
      />
      {/* @if(Auth::user()->auth_level != 100)
홈페이지 관리자 등급만 수정 할 수 있습니다.
@else

@if (session('status'))
<div className="alert alert-success">
    {{ session('status') }}
</div>
@endif */}

      <Card
        title="뉴스 목록"
        bordered={false}
        style={{ width: "90%", marginLeft: "5%", marginRight: "5%" }}
      >
        <Table dataSource={dataSource} columns={columns} />
      </Card>
      <br />
      <Card
        title="뉴스 등록 및 수정"
        bordered={false}
        style={{ width: "90%", marginLeft: "5%", marginRight: "5%" }}
      >
        {record ? (
          <EditNews
            record={record}
            reset={resetRecord}
            save={saveApi}
            update={updateApi}
          />
        ) : (
          <Empty
            image={Empty.PRESENTED_IMAGE_DEFAULT}
            imageStyle={{ height: 60 }}
            description={<span>새 뉴스 등록</span>}
          >
            <Button onClick={dumpRecord}>Create New</Button>
          </Empty>
        )}
      </Card>
    </div>
  );
};

export default News;
