import TermpapersService from '../../core/services/TermpapersSerivce';

export const TermpapersAction = {
  LOAD_TERMPAPERS: 'LOAD_TERMPAPERS',
  LOAD_TERMPAPERS_SUCCESS: 'LOAD_TERMPAPERS_SUCCESS',
  LOAD_TERMPAPERS_FAILED: 'LOAD_TERMPAPERS_FAILED',
  TAKE_TERMPAPERS: 'TAKE_TERMPAPERS',
  TAKE_TERMPAPERS_SUCCESS: 'TAKE_TERMPAPERS_SUCCESS',
  TAKE_TERMPAPERS_FAILED: 'TAKE_TERMPAPERS_FAILED',
  CREATE_TERMPAPER: 'CREATE_TERMPAPER',
  CREATE_TERMPAPER_SUCCESS: 'CREATE_TERMPAPER_SUCCESS',
  CREATE_TERMPAPER_FAILED: 'CREATE_TERMPAPER_FAILED',
};

export const loadTermpapers = user => dispatch => {
  dispatch({ type: TermpapersAction.LOAD_TERMPAPERS });
  TermpapersService.getTermpapers().then(
    data => {
      dispatch({ type: TermpapersAction.LOAD_TERMPAPERS_SUCCESS, payload: data });
    },
    error => {
      dispatch({ type: TermpapersAction.LOAD_TERMPAPERS_FAILED });
    }
  );
};

export const takeTermpaper = theme => dispatch => {
  dispatch({ type: TermpapersAction.TAKE_TERMPAPERS });
  TermpapersService.takeTermpaper(theme).then(
    data => {
      dispatch({ type: TermpapersAction.TAKE_TERMPAPERS_SUCCESS });
    },
    error => {
      dispatch({ type: TermpapersAction.TAKE_TERMPAPERS_FAILED });
    }
  );
};

export const createTermpaper = (theme, description) => dispatch => {
  dispatch({ type: TermpapersAction.CREATE_TERMPAPER });
  TermpapersService.createTermpaper(theme, description).then(
    data => {
      dispatch({ type: TermpapersAction.CREATE_TERMPAPER_SUCCESS, payload: data });
    },
    error => {
      dispatch({ type: TermpapersAction.CREATE_TERMPAPER_FAILED });
    }
  );
};