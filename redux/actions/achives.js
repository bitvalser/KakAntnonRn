import UserService from '../../core/services/UserService';
import AchivesService from '../../core/services/AchivesService';

export const AchivesAction = {
  LOAD_ACHIVES: 'LOAD_ACHIVES',
  LOAD_ACHIVES_SUCCESS: 'LOAD_ACHIVES_SUCCESS',
  LOAD_ACHIVES_FAILED: 'LOAD_ACHIVES_FAILED',
  LOAD_ALL_ACHIVES: 'LOAD_ALL_ACHIVES',
  LOAD_ALL_ACHIVES_SUCCESS: 'LOAD_ALL_ACHIVES_SUCCESS',
  LOAD_ALL_ACHIVES_FAILED: 'LOAD_ALL_ACHIVES_FAILED',
  CREATE_ACHIVE: 'CREATE_ACHIVE',
  CREATE_ACHIVE_SUCCESS: 'CREATE_ACHIVE_SUCCESS',
  CREATE_ACHIVE_FAILED: 'CREATE_ACHIVE_FAILED'
};

export const loadAchives = user => dispatch => {
  dispatch({ type: AchivesAction.LOAD_ACHIVES });
  UserService.getAchives().then(
    data => {
      const { achives } = data;
      dispatch({ type: AchivesAction.LOAD_ACHIVES_SUCCESS, payload: achives });
    },
    error => {
      dispatch({ type: AchivesAction.LOAD_ACHIVES_FAILED });
    }
  );
};

export const loadAllAchives = user => dispatch => {
  dispatch({ type: AchivesAction.LOAD_ALL_ACHIVES });
  AchivesService.getAllAchives().then(
    data => {
      dispatch({ type: AchivesAction.LOAD_ALL_ACHIVES_SUCCESS, payload: data });
    },
    error => {
      dispatch({ type: AchivesAction.LOAD_ALL_ACHIVES_FAILED });
    }
  );
};

export const createAchive = (title, description) => dispatch => {
  dispatch({ type: AchivesAction.CREATE_ACHIVE });
  AchivesService.createAhive(title, description).then(
    data => {
      console.log(data);
      dispatch({ type: AchivesAction.CREATE_ACHIVE_SUCCESS, payload: data });
    },
    error => {
      dispatch({ type: AchivesAction.CREATE_ACHIVE_FAILED });
    }
  );
};
