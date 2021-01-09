import actionTypes from './types';

const initialState = {
  actions: [],
  tools: [],
  options: [],
  fileFormats: [],
  url: '',
  fileOrigin: 'file',
  defaultPDFTool: '',
  defaultJPEGTool: 'JPEG hul',
  filePath: '',
  dirPath: '',
  fileName: '',
  mimeType: '',
};

export const preproccessReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ACTIONS: {
      return {
        ...state,
        actions: action.payload,
      };
    }
    case actionTypes.SET_ACTION: {
      return {
        ...state,
        actions: state.actions.map(e => ({
          ...e,
          active: e.preservationActionName === action.payload,
        })),
        tools: state.tools.map(e => ({
          ...e,
          active: false,
        })),
        options: state.options.map(e => ({
          ...e,
          active: false,
        })),
      };
    }
    case actionTypes.SET_OPTIONS: {
      return {
        ...state,
        options: action.payload,
      };
    }
    /* case actionTypes.SET_ACTIVE_OPTION: {
      return {
        ...state,
        options: state.options.map(e => ({
          ...e,
          active: e.optionName === action.payload,
        })),
      };
    } */
    case actionTypes.SET_TOOL: {
      return {
        ...state,
        tools: state.tools.map(e => ({
          ...e,
          active: e.toolName === action.payload,
        })),
        options: state.options.map(e => ({
          ...e,
          active: false,
        })),
      };
    }
    case actionTypes.SET_URL: {
      return {
        ...state,
        url: action.payload,
      };
    }
    case actionTypes.SET_FILE_ORIGIN: {
      return {
        ...state,
        fileOrigin: action.payload,
        actions: state.actions.map(e => ({
          ...e,
          active: false,
        })),
        tools: state.tools.map(e => ({
          ...e,
          active: false,
        })),
        options: state.options.map(e => ({
          ...e,
          active: false,
        })),
        mimeType: '',
        fileName: '',
        filePath: '',
        url: '',
      };
    }
    case actionTypes.UPDATE_JPEG_TOOL: {
      return {
        ...state,
        defaultJPEGTool: action.payload,
      };
    }

    case actionTypes.SET_DIR_PATH: {
      return {
        ...state,
        dirPath: action.payload,
      };
    }
    case actionTypes.SET_DEFAULT_PDF_TOOl: {
      return {
        ...state,
        defaultPDFTool: action.payload,
      };
    }

    case actionTypes.SET_FILE_INFO: {
      return {
        ...state,
        mimeType: action.payload.type,
        fileName: action.payload.name,
        filePath: action.payload.path,
        actions: state.actions.map(e => ({
          ...e,
          active: false,
        })),
        tools: state.tools.map(e => ({
          ...e,
          active: false,
        })),
      };
    }

    case actionTypes.SET_PAR_DATA: {
      return {
        ...state,
        ...action.payload,
      };
    }

    case actionTypes.SET_MIME_TYPE: {
      return {
        ...state,
        mimeType: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export const setTool = value => ({ type: actionTypes.SET_TOOL, payload: value });
export const setOptions = value => ({ type: actionTypes.SET_OPTIONS, payload: value });
export const setActions = value => ({ type: actionTypes.SET_ACTIONS, payload: value });
export const setAction = value => ({ type: actionTypes.SET_ACTION, payload: value });
export const setURL = value => ({ type: actionTypes.SET_URL, payload: value });
export const setFileOrigin = value => ({ type: actionTypes.SET_FILE_ORIGIN, payload: value });
export const setDefaultPDFTool = value => ({ type: actionTypes.SET_DEFAULT_PDF_TOOl, payload: value });
export const updateJPEGTool = value => ({ type: actionTypes.UPDATE_JPEG_TOOL, payload: value });
export const setDirPath = value => ({ type: actionTypes.SET_DIR_PATH, payload: value });
export const setFileInfo = (fileName, filePath, fileMimeType) => ({
  type: actionTypes.SET_FILE_INFO,
  payload: { name: fileName, path: filePath, type: fileMimeType },
});
export const setMimeType = value => ({ type: actionTypes.SET_MIME_TYPE, payload: value });
export const setParData = value => ({ type: actionTypes.SET_PAR_DATA, payload: value });
