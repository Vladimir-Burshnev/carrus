/* eslint-disable react/no-array-index-key */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-else-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-closing-tag-location */
import React, { useRef, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Nav, NavItem, NavLink, TabContent, TabPane, FormGroup, Label, Input, Button } from 'reactstrap';
import { ipcRenderer } from 'electron';
import ProgressBar from '../Loading/ProgressBar';
import FileHandler from './FileHandler';
import UrlHandler from './UrlHandler';
import SemiHeader from '../Header/SemiHeader';
import { setTool, setOptions, setAction, setOutputFolder, setFileOrigin } from '../../Redux/redux-reducers';

const Main = props => {
  const { fileOrigin, filePath } = props;
  const { t } = useTranslation();
  const directoryRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const { actions } = props;

  useEffect(() => {
    console.log(props);
  }, [props]);
  const handleExecute = () => {
    setIsLoading(true);
    setTimeout(() => {
      ipcRenderer.send('create_new_window', filePath);
      setIsLoading(false);
    }, 2000);
  };
  return !isLoading ? (
    <div className="container d-flex flex-column">
      <SemiHeader />
      <Nav tabs className="mt-5">
        <NavItem className="mr-1">
          <NavLink
            className={fileOrigin === 'file' ? 'active text-success font-weight-bold' : 'bg-light text-dark'}
            onClick={() => props.setFileOrigin('file')}
          >
            {t('YourFile')}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={fileOrigin === 'url' ? 'active text-success font-weight-bold' : 'bg-light text-dark '}
            onClick={() => props.setFileOrigin('url')}
          >
            {t('FromUrl')}
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={fileOrigin}>
        <TabPane tabId="file">
          <FileHandler />
        </TabPane>
        <TabPane tabId="url">
          <UrlHandler />
        </TabPane>
      </TabContent>
      <FormGroup className="mt-3 w-50 d-flex flex-row">
        <Label for="action" className="mr-3 my-auto w-25">
          <span>{t('Action')}:</span>
        </Label>
        <Input type="select" onChange={e => props.setAction(e.target.value)}>
          {actions.map((e, i) => (
            <option key={i + 1 * 2}>{e.preservationActionName}</option>
          ))}
        </Input>
      </FormGroup>
      <FormGroup className="mt-3 w-50 d-flex flex-row">
        <Label for="tool" className="mr-3 my-auto w-25">
          <span>{t('Tool')}: </span>
        </Label>
        <Input type="select" onChange={e => props.setTool(e.target.value)}>
          <option hidden>Choose Tool</option>
          {actions
            .filter(e => e.active)[0]
            .tool.map((e, i) => (
              <option key={i}>{e.toolName}</option>
            ))}
        </Input>
      </FormGroup>
      <FormGroup className="mt-3 w-50 d-flex flex-row">
        <Label for="action" className="mr-3 my-auto w-25">
          <span>{t('Options')}: </span>
        </Label>
        <Input type="select" onChange={e => props.setOptions(e.target.value)}>
          <option hidden>Choose Option</option>
          <option>PDF/A-1</option>
          <option>PDF/A-2</option>
          <option>PDF/A-3</option>
        </Input>
      </FormGroup>
      <FormGroup className="mt-3 w-50 d-flex flex-row">
        <Label for="customFile" className="mr-3 my-auto w-25">
          {t('OutputFolder')}:
        </Label>
        {/* <CustomInput
            directory=""
            webkitdirectory=""
            type="file"
            id="customFolderInput"
          /> */}
        <input
          directory=""
          webkitdirectory=""
          type="file"
          onChange={() => console.log(directoryRef.current.files[0])}
          ref={directoryRef}
        />
      </FormGroup>
      <Button color="success" value="Execute" className="mt-3 align-self-center" onClick={handleExecute}>
        {t('Execute')}
      </Button>
    </div>
  ) : (
    <ProgressBar />
  );
};

const mapStateToProps = state => ({
  actions: state.actions,
  outputFolder: state.outputFolder,
  url: state.url,
  fileOrigin: state.fileOrigin,
  fileName: state.fileName,
  filePath: state.filePath,
  tool: state.tool,
});

export default connect(mapStateToProps, {
  setTool,
  setOptions,
  setAction,
  setOutputFolder,
  setFileOrigin,
})(Main);
