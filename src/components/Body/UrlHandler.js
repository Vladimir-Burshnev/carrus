import React from 'react';
import { FormGroup, Label, Input, CustomInput, Button } from 'reactstrap';

const UrlHandler = () => (
  <div className="mt-3 d-flex flex-column">
    <FormGroup className="mt-3 w-50 d-flex flex-row">
      <Label for="action" className="text-right mr-3 w-25">
        <span>URL: </span>
      </Label>
      <Input type="text" name="action" id="action" className="w-75" />
    </FormGroup>
    <FormGroup className="mt-3 w-50 d-flex flex-row">
      <Label for="action" className="text-right mr-3 w-25">
        <span>Action: </span>
      </Label>
      <Input type="select" name="action" id="action" className="w-75">
        <option>Validate</option>
        <option>Characterize</option>
      </Input>
    </FormGroup>
    <FormGroup className="mt-3 w-50 d-flex flex-row">
      <Label for="tool" className="text-right mr-3 w-25">
        <span>Tool: </span>
      </Label>
      <Input type="select" name="tool" id="tool" className="w-75">
        <option>veraPDF</option>
        <option>PDF hul</option>
      </Input>
    </FormGroup>
    <FormGroup className="mt-3 w-50 d-flex flex-row">
      <Label for="action" className="text-right mr-3 w-25">
        <span>Options: </span>
      </Label>
      <Input type="select" name="action" id="action" className="w-75">
        <option>PDF/A-1</option>
        <option>PDF/A-2</option>
        <option>PDF/A-3</option>
      </Input>
    </FormGroup>
    <FormGroup className="mt-3 w-50 d-flex flex-row">
      <Label for="customFile" className="text-right mr-3 w-25">
        Output Folder:
      </Label>
      <CustomInput
        type="file"
        id="exampleCustomFileBrowser"
        name="customFile"
        label="📁 Browse File"
      />
    </FormGroup>
    <Button color="success" value="Execute" className="mt-3 align-self-center">
      Execute
    </Button>
  </div>
);

export default UrlHandler;
