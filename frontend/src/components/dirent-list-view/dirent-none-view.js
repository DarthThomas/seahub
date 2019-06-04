import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { gettext } from '../../utils/constants';
import Loading from '../loading';
import ModalPortal from '../modal-portal';
import CreateFile from '../../components/dialog/create-file-dialog';

import '../../css/tip-for-new-md.css';

const propTypes = {
  path: PropTypes.string.isRequired,
  isDirentListLoading: PropTypes.bool.isRequired,
  onAddFile: PropTypes.func.isRequired,
};

class DirentNodeView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fileType: '',
      isCreateFileDialogShow: false,
    };
  } 

  onCreateNewFile = (type) => {
    this.setState({
      fileType: type,
      isCreateFileDialogShow: !this.state.isCreateFileDialogShow,
    });
  }

  onCreateFileToggle = () => {
    this.setState({
      fileType: '',
      isCreateFileDialogShow: !this.state.isCreateFileDialogShow,
    });
  }

  checkDuplicatedName = () => {
    return false; // current repo is null, and unnecessary to check duplicated name
  }

  onAddFile = (filePath, isDraft) => {
    this.setState({isCreateFileDialogShow: false});
    this.props.onAddFile(filePath, isDraft);
  }

  render() {
    if (this.props.isDirentListLoading) {
      return (<Loading />);
    }

    return (
      <Fragment>
        <div className="tip-for-new-file">
          <p className="text-center">{gettext('This folder has no content at this time.')}</p>
          <p className="text-center">{gettext('You can create files quickly')}{' +'}</p>
          <div className="big-new-file-button-group">
            <div className="d-flex justify-content-center">
              <button className="big-new-file-button" onClick={this.onCreateNewFile.bind(this, '.umind')}>
                {'+ Umind'}</button>
              <button className="big-new-file-button" onClick={this.onCreateNewFile.bind(this, '.pptx')}>
                {'+ PPT'}</button>
            </div>
            <div className="d-flex justify-content-center">
              <button className="big-new-file-button" onClick={this.onCreateNewFile.bind(this, '.docx')}>
                {'+ Word'}</button>
              <button className="big-new-file-button" onClick={this.onCreateNewFile.bind(this, '.xlsx')}>
                {'+ Excel'}</button>
            </div>
          </div>
        </div>
        {this.state.isCreateFileDialogShow && (
          <ModalPortal>
            <CreateFile
              parentPath={this.props.path}
              fileType={this.state.fileType}
              onAddFile={this.onAddFile}
              addFileCancel={this.onCreateFileToggle}
              checkDuplicatedName={this.checkDuplicatedName}
            />
          </ModalPortal>
        )}
      </Fragment>
    );
  }
}

DirentNodeView.propTypes = propTypes;

export default DirentNodeView;
