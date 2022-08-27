import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  EditorState,
  convertToRaw,
  ContentState,
  convertFromHTML
} from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

import { Select } from "antd";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "antd/dist/antd.css";

import "react-color-picker/index.css";
const { Option } = Select;

class EditorConvertToHTML extends Component {
  constructor(props) {
    super(props);

    const html = '<p id="para">asdfsd</p>';
    const contentBlock = htmlToDraft(html);

    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks
      );
      const editorState = EditorState.createWithContent(contentState);
      this.state = {
        editorState,
        background: "",
        isOpen: false,
        emailBody: `<p id="para">test</p>`,
        fontcolor: ""
      };
    }
  }

  onEditorStateChange = editorState => {
    this.setState({
      editorState
    });
  };
  onsubmit = () => {
    console.log(
      draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))
    );
  };

  onEditorChange = evt => {
    this.setState({
      emailBody: evt.editor.getData()
    });
  };

  componentDidMount() {
    document.getElementById("para").style.color = "red !important";
  }

  handleChangeComplete = color => {
    this.setState({ background: color.hex });
    document.getElementById(
      "test"
    ).style.backgroundColor = this.state.background;
  };
  handleChange = value => {
    this.setState(
      {
        fontcolor: value.toString()
      },
      () => {
        return (document.getElementById(
          "para"
        ).style.color = this.state.fontcolor);
      }
    );
  };
  handleChangeAlignment = data => {
    this.setState(
      {
        alignment: data.toString()
      },
      () => {
        return (document.getElementById(
          "para"
        ).style.textAlign = this.state.alignment);
      }
    );
  };
  handlebackground = data => {
    this.setState(
      {
        backgroundcolor: data.toString()
      },
      () => {
        return (document.getElementById(
          "para"
        ).style.backgroundColor = this.state.backgroundcolor);
      }
    );
  };

  render() {
    console.log(
      this.state.isOpen &&
        draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))
    );

    const colors = [
      { id: "1", name: "red" },
      { id: "2", name: "black" },
      { id: "3", name: "white" }
    ];
    const back = [
      { id: "1", name: "red" },
      { id: "2", name: "black" },
      { id: "3", name: "white" }
    ];
    const AlignMent = [
      { id: "1", name: "center" },
      { id: "2", name: "left" },
      { id: "3", name: "right" }
    ];

    const { editorState } = this.state;
    console.log(this.state.editorState)
    return (
      <div className="Edtr__wrpp">
        {
          draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))
        }
        {
          console.log( draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())) )
        }
        <Select
          defaultValue={"backg"}
          onChange={this.handlebackground}
          style={{ width: "100%" }}
          showSearch
          placeholder="Select a person"
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >=
            0
          }
        >
          {back.map(item => (
            <Option key={JSON.stringify(item.id)} value={item.name}>
              {item.name}
            </Option>
          ))}
        </Select>
        <Select
          defaultValue={"selct"}
          onChange={this.handleChangeAlignment}
          style={{ width: "100%" }}
          showSearch
          placeholder="Select a person"
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >=
            0
          }
        >
          {AlignMent.map(item => (
            <Option key={JSON.stringify(item.id)} value={item.name}>
              {item.name}
            </Option>
          ))}
        </Select>
        <Select
          size={10}
          defaultValue={"selct"}
          onChange={this.handleChange}
          style={{ width: "100%" }}
          showSearch
          placeholder="Select a person"
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >=
            0
          }
        >
          {colors.map(item => (
            <Option key={JSON.stringify(item.id)} value={item.name}>
              {item.name}
            </Option>
          ))}
        </Select>
        <p id="para">test</p>
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
        />
        <button onClick={this.onsubmit}>Salvar</button>
      </div>
    );
  }
}

class MatterEditor extends React.Component {
  render() {
    return <EditorConvertToHTML />
  }
}

export default MatterEditor;

