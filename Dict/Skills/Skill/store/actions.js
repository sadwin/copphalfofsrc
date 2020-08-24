import { getSkillAll, getSkillAuthors, getSkillCard, deleteSkill, getSkill, updateSkill,
  getModuleList, createModuleList, updateModule, deleteModule, createScale, updateScale, deleteScale, sendToExpertize, publish, createRate, updateRate, deleteRate, getRoomList, createRoom, updateRoom, deleteRoom, createResource, updateResource, deleteResource } from "../api";
import types from './types'


// SEND TO EXPERTIZE
export function toExpertizeReq(toExpertizeRes) {
  return {
    type: types.SEND_TO_EXPERTIZE_RES,
    toExpertizeRes
  }
}

export function toExpertizeAction(id) {
  let data = {
    "type" : "sendToApprove",
    "id" : id,
  }
  return dispatch => {
    return sendToExpertize(data)
      .then(response => {
        if (response.data.status) {
          dispatch(toExpertizeReq(response.data));
        } else {
          throw new Error(response.data)
        }
      })
      .catch(err => {
          dispatch(toExpertizeReq(err));
      });
  };
};

// PUBLISH
export function publishReq(toPublishRes) {
  return {
    type: types.SEND_TO_PUBLISH_RES,
    toPublishRes
  }
}

export function publishAction(id) {
  let data = {
    "type" : "publish",
    "id" : id
  }
  return dispatch => {
    return publish(data)
      .then(response => {
        if (response.data.status) {
          dispatch(publishReq(response.data));
        } else {
          throw new Error(response.data)
        }
      })
      .catch(err => {
          dispatch(publishReq(err));
      });
  };
}



// Change Skill
export function changeSkill(skill) {
  return {
    type: types.CHANGE_UPDATE_DATA,
    skill
  }
}

//GET ALL
function requestSkillAll() {
  return {
    type: types.GET_SKILLALL_REQUEST,
    fetchingSkillAll: true
  };
}

function skillAllCompleted(skillAll) {
  return {
    type: types.GET_SKILLALL_COMPLETED,
    fetchingSkillAll: false,
    skillAll
  };
}

function skillAllError(skillAllError) {
  return {
    type: types.GET_SKILLALL_ERROR,
    fetchingSkillAll: false,
    skillAllError
  };
}

export function getSkillAllAction() {
  return dispatch => {
    dispatch(requestSkillAll());
    return getSkillAll()
      .then(response => {
        if (response.status === 200) {
          dispatch(skillAllCompleted(response.data));
        } else {
          throw new Error(response.data)
        }
      })
      .catch(err => {
          dispatch(skillAllError(err));
      });
  };
}


//GET SKILL AUTHORS
function requestSkillAuthors() {
  return {
    type: types.GET_SKILL_AUTHORS_REQUEST,
    fetchingSkillAuthors: true
  };
}

function skillAuthorsCompleted(skillAuthors) {
  return {
    type: types.GET_SKILL_AUTHORS_COMPLETED,
    fetchingSkillAuthors: false,
    skillAuthors
  };
}

function skillAuthorsError(skillAuthorsError) {
  return {
    type: types.GET_SKILL_AUTHORS_ERROR,
    fetchingSkillAuthors: false,
    skillAuthorsError
  };
}

export function getSkillAuthorsAction(id) {
  return dispatch => {
    dispatch(requestSkillAuthors());
    return getSkillAuthors(id)
      .then(response => {
        if (response.status === 200) {
          dispatch(skillAuthorsCompleted(response.data));
        } else {
          throw new Error(response.data)
        }
      })
      .catch(err => {
          dispatch(skillAuthorsError(err));
      });
  };
}





//GET One Skill
function requestSkill() {
  return {
    type: types.GET_SKILL_REQUEST,
    fetchingSkill: true
  };
}

 function skillCompleted(skill) {
  return {
    type: types.GET_SKILL_COMPLETED,
    fetchingSkill: false,
    skill
  };
}

function skillError(skillError) {
  return {
    type: types.GET_SKILL_ERROR,
    fetchingSkill: false,
    skillError
  };
}

export function getSkillAction(id) {
  return dispatch => {
    dispatch(requestSkill());
    return getSkill(id)
      .then(response => {
        if (response.status === 200) {
          dispatch(skillCompleted(response.data));
        } else {
          throw new Error(response.data)
        }
      })
      .catch(err => {
          dispatch(skillError(err));
      });
  };
}

//GET CARD
function requestSkillCard() {
  return {
    type: types.GET_SKILL_CARD_REQUEST,
    fetchingSkillCard: true
  };
}

function skillCardCompleted(skillCard) {
  return {
    type: types.GET_SKILL_CARD_COMPLETED,
    fetchingSkillCard: false,
    skillCard
  };
}

function skillCardError(skillCardError) {
  return {
    type: types.GET_SKILL_CARD_ERROR,
    fetchingSkillCard: false,
    skillCardError
  };
}

export function getSkillCardAction (id) {
  return dispatch => {
    dispatch(requestSkillCard());
    return getSkillCard(id)
      .then(response => {
        if (response.status === 200) {
          dispatch(skillCardCompleted(response.data));
        } else {
          return Promise.reject(response);
        }
        return Promise.resolve();
      })
      .catch(err => {
        dispatch(skillCardError());
        if (err.status === 404) {
          console.log(err.status);
        } else {
          console.log(err);
        }
      });
  };
}


//UPDATE SKILL
function requestUpdateSkill() {
  return {
    type: types.UPDATE_SKILL_REQUEST,
    updatingSkill: true
  };
}

function responseUpdateSkill(updatedSkill) {
  return {
    type: types.UPDATE_SKILL_RESPONSE,
    updatingSkill: false,
    updatedSkill
  };
}

export function updateSkillAction (id, skill) {
  return dispatch => {
    dispatch(requestUpdateSkill());
    return updateSkill(id, skill)
      .then(response => {
        if (response.data.success) {
          dispatch(responseUpdateSkill(response.data));
          dispatch(getSkillAction(id))
        } else {
          throw new Error(response.data)
        }
      })
      .catch(err => {
        dispatch(responseUpdateSkill(err));
      });
  };
}


// //GET GROUP
// function requestSpecialitiesGroup() {
//   return {
//     type: GET_SPECIALITYGROUP_REQUEST,
//     isFetchingSpecialityGroup: true
//   };
// }

// function requestSpecialitiesGroupCompleted(specialityGroup) {
//   return {
//     type: GET_SPECIALITYGROUP_COMPLETED,
//     isFetchingSpecialityGroup: false,
//     specialityGroup
//   };
// }

// function requestSpecialitiesGroupError(specialityGroupError) {
//   return {
//     type: GET_SPECIALITYGROUP_ERROR,
//     isFetchingSpecialityGroup: false,
//     specialityGroupError
//   };
// }

// export function getSpecialitiesGroupAction() {
//   return dispatch => {
//     dispatch(requestSpecialitiesGroup());
//     return getSpecialityGroup()
//       .then(response => {
//         if (response.status === 200) {
//           console.log(response);
//           dispatch(requestSpecialitiesGroupCompleted(response.data));
//         } else {
//           return Promise.reject(response);
//         }
//         return Promise.resolve();
//       })
//       .catch(err => {
//         if (err.response.status === 404) {
//           console.log(err.response);
//           dispatch(requestSpecialitiesGroupError(err.response));
//         } else {
//           console.log(err);
//         }
//       });
//   };
// }


// //ADD
// function addSpecialititesRequest() {
//   return {
//     type: ADD_SPECIALITIES_REQUEST,
//     isAddingSpecialities: true
//   };
// }

// function addSpecialititesCompleted(addedSpecialities) {
//   return {
//     type: ADD_SPECIALITIES_COMPLETED,
//     isAddingSpecialities: false,
//     addedSpecialities
//   };
// }

// function addSpecialititesError(addedSpecialitiesError) {
//   return {
//     type: ADD_SPECIALITIES_ERROR,
//     isAddingSpecialities: false,
//     addedSpecialitiesError
//   };
// }


// export function addSpecialitiesAction(data) {
//   return dispatch => {
//     dispatch(addSpecialititesRequest());
//     return addSpecialities(data)
//       .then(response => {
//         if (response.status === 200) {
//           console.log('res',response);
//           dispatch(addSpecialititesCompleted(response.data));
//         } else {
//           return Promise.reject(response);
//         }
//         return Promise.resolve();
//       })
//       .catch(err => {
//         if (err.status === 400) {
//           console.log('error', err);
//           dispatch(addSpecialititesError(err));
//         } else {
//           console.log('out',err);
//         }
//       });
//   };
// }




//DELETE
function deleteSkillRequest() {
  return {
    type: types.DELETE_SKILL_REQUEST,
    isDeletingSkill: true
  };
}

function deleteSkillCompleted(deletedSkill) {
  return {
    type:types.DELETE_SKILL_COMPLETED,
    isDeletingSkill: false,
    deletedSkill
  };
}

function deleteSkillError(deletingSkillError) {
  return {
    type: types.DELETE_SKILL_ERROR,
    isDeletingSkill: false,
    deletingSkillError
  };
}

export function deleteSkillAction(idList) {
  return async dispatch => {
      dispatch(deleteSkillRequest());

      const response = await Promise.all(
        idList.map(id => deleteSkill(id))
      );
        console.log(response)
      if (response.every(({ data }) => data.success === true)) {
        dispatch(deleteSkillCompleted(response));
        dispatch(getSkillAllAction());
      } else {
        dispatch(deleteSkillError(response));
      }
      return response;
  };
}

//GET Module List & Scale
function requestModuleList() {
  return {
    type: types.GET_MODULE_LIST_REQUEST,
    fetchingModuleList: true
  };
}

function ModuleListCompleted(moduleList) {
  return {
    type: types.GET_MODULE_LIST_COMPLETED,
    fetchingModuleList: false,
    moduleList
  };
}

function ModuleListError(moduleListError) {
  return {
    type: types.GET_MODULE_LIST_ERROR,
    fetchingModuleList: false,
    moduleListError
  };
}

export function getModuleListAction(id) {
  return dispatch => {
    dispatch(requestModuleList());
    return getModuleList(id)
      .then(response => {
        if (response.status === 200) {
          dispatch(ModuleListCompleted(response.data));
        } else {
          throw new Error(response.data)
        }
      })
      .catch(err => {
          dispatch(ModuleListError(err));
      });
  };
}


// CREATE Module List & Scale
function createModuleListReq() {
  return {
    type: types.CREATE_MODULE_LIST_REQUEST,
    createModuleListRequest: true
  };
}


function createModuleListRes(createModuleListResponse) {
  return {
    type: types.CREATE_MODULE_LIST_ERROR,
    createModuleListRequest: false,
    createModuleListResponse
  };
}

export function createModuleListAction(id) {
  return dispatch => {
    dispatch(createModuleListReq());
    return createModuleList(id)
      .then(response => {
        if (response.status === 200) {
          dispatch(createModuleListRes(response.data));
        } else {
          throw new Error(response.data)
        }
      })
      .catch(err => {
          dispatch(createModuleListRes(err));
      });
  };
}


// Update Module List & Scale
function updateModuleReq() {
  return {
    type: types.UPDATE_MODULE_REQUEST,
    updateModuleRequest: true
  };
}


function updateModuleRes(updateModuleResponse) {
  return {
    type: types.UPDATE_MODULE_RESPONSE,
    updateModuleRequest: false,
    updateModuleResponse
  };
}


export function updateModuleAction(id, moduleId, data) {
  return dispatch => {
    dispatch(updateModuleReq());
    return updateModule(id, moduleId, data)
      .then(response => {
        if (response.data.status) {
          dispatch(updateModuleRes(response.data));
        } else {
          throw new Error(response.data)
        }
      })
      .catch(err => {
          dispatch(updateModuleRes(err));
      });
  };
}



// Delete Module List & Scale
function deleteModuleReq() {
  return {
    type: types.DELETE_MODULE_REQUEST,
    deleteModuleRequest: true
  };
}


function deleteModuleRes(deleteModuleResponse) {
  return {
    type: types.DELETE_MODULE_RESPONSE,
    deleteModuleRequest: false,
    deleteModuleResponse
  };
}


export function deleteModuleAction(id, moduleId) {
  return dispatch => {
    dispatch(deleteModuleReq());
    return deleteModule(id, moduleId)
      .then(response => {
        if (response.data.status) {
          dispatch(deleteModuleRes(response.data));
        } else {
          throw new Error(response.data)
        }
      })
      .catch(err => {
          dispatch(deleteModuleRes(err));
      });
  };
}


// Create Scale
function createScaleReq() {
  return {
    type: types.CREATE_SCALE_REQUEST,
    createScaleRequest: true
  };
};
function createScaleRes(createScaleResponse) {
  return {
    type: types.CREATE_SCALE_RESPONSE,
    createScaleRequest: false,
    createScaleResponse
  };
};
export function createScaleAction(id, moduleId) {
  return dispatch => {
    dispatch(createScaleReq());
    return createScale(id, moduleId)
      .then(response => {
          dispatch(createScaleRes(response.data));
      })
      .catch(err => {
          dispatch(createScaleRes(err));
      });
  };
}


// Update Scale
function updateScaleReq() {
  return {
    type: types.UPDATE_SCALE_REQUEST,
    updateScaleRequest: true
  };
};
function updateScaleRes(updateScaleResponse) {
  return {
    type: types.UPDATE_SCALE_RESPONSE,
    updateScaleRequest: false,
    updateScaleResponse
  };
};
export function updateScaleAction(id, moduleId, moduleScaleId, data) {
  return dispatch => {
    dispatch(updateScaleReq());
    return updateScale(id, moduleId, moduleScaleId, data)
      .then(response => {
        if (response.data.status) {
          dispatch(updateScaleRes(response.data));
        } else {
          throw new Error(response.data)
        }
      })
      .catch(err => {
          dispatch(updateScaleRes(err));
      });
  };
}



// Delete Scale
function deleteScaleReq() {
  return {
    type: types.DELETE_SCALE_REQUEST,
    deleteScaleRequest: true
  };
};
function deleteScaleRes(deleteScaleResponse) {
  return {
    type: types.DELETE_SCALE_RESPONSE,
    deleteScaleRequest: false,
    deleteScaleResponse
  };
};
export function deleteScaleAction(id, moduleId, moduleScaleId) {
  return dispatch => {
    dispatch(deleteScaleReq());
    return deleteScale(id, moduleId, moduleScaleId)
      .then(response => {
        if (response.data.status) {
          dispatch(deleteScaleRes(response.data));
        } else {
          throw new Error(response.data)
        }
      })
      .catch(err => {
          dispatch(deleteScaleRes(err));
      });
  };
}









// Create Rate
function createRateReq() {
  return {
    type: types.CREATE_RATE_REQUEST,
    createRateRequest: true
  };
};
function createRateRes(createRateResponse) {
  return {
    type: types.CREATE_RATE_RESPONSE,
    createRateRequest: false,
    createRateResponse
  };
};
export function createRateAction(id, moduleId) {
  return dispatch => {
    dispatch(createRateReq());
    return createRate(id, moduleId)
      .then(response => {
          dispatch(createRateRes(response.data));
      })
      .catch(err => {
          dispatch(createRateRes(err));
      });
  };
}

// Update Rate
function updateRateReq() {
  return {
    type: types.UPDATE_RATE_REQUEST,
    updateRateRequest: true
  };
};
function updateRateRes(updateRateResponse) {
  return {
    type: types.UPDATE_RATE_RESPONSE,
    updateRateRequest: false,
    updateRateResponse
  };
};
export function updateRateAction(id, moduleId, moduleRateId, data) {
  return dispatch => {
    dispatch(updateRateReq());
    return updateRate(id, moduleId, moduleRateId, data)
      .then(response => {
          dispatch(updateRateRes(response.data));
      })
      .catch(err => {
          dispatch(updateRateRes(err));
      });
  };
}

// Delete Rate
function deleteRateReq() {
  return {
    type: types.DELETE_RATE_REQUEST,
    deleteRateRequest: true
  };
};
function deleteRateRes(deleteRateResponse) {
  return {
    type: types.DELETE_RATE_RESPONSE,
    deleteRateRequest: false,
    deleteRateResponse
  };
};
export function deleteRateAction(id, moduleId, moduleRateId) {
  return dispatch => {
    dispatch(deleteRateReq());
    return deleteRate(id, moduleId, moduleRateId)
      .then(response => {
          dispatch(deleteRateRes(response.data));
      })
      .catch(err => {
          dispatch(deleteRateRes(err));
      });
  };
}


//GET Rooms List
function requestRoomList() {
  return {
    type: types.GET_ROOMS_REQUEST,
    fetchingRoomList: true
  };
}
function roomListCompleted(roomList) {
  return {
    type: types.GET_ROOMS_COMPLETED,
    fetchingRoomList: false,
    roomList
  };
}
function roomListError(roomListError) {
  return {
    type: types.GET_ROOMS_ERROR,
    fetchingRoomList: false,
    roomListError
  };
}
export function roomListAction(id) {
  return dispatch => {
    dispatch(requestRoomList(id));
    return getRoomList(id)
      .then(response => {
          dispatch(roomListCompleted(response.data));
      })
      .catch(err => {
          dispatch(roomListError(err));
      });
  };
}


// Create Room
function createRoomReq() {
  return {
    type: types.CREATE_ROOMS_REQUEST,
    createRoomRequest: true
  };
};
function createRoomRes(createRoomResponse) {
  return {
    type: types.CREATE_ROOMS_RESPONSE,
    createRoomRequest: false,
    createRoomResponse
  };
};
export function createRoomAction(id) {
  return dispatch => {
    dispatch(createRoomReq());
    return createRoom(id)
      .then(response => {
          dispatch(createRoomRes(response.data));
      })
      .catch(err => {
          dispatch(createRoomRes(err));
      });
  };
}

// Update Room
function updateRoomReq() {
  return {
    type: types.UPDATE_ROOMS_REQUEST,
    updateRoomRequest: true
  };
};
function updateRoomRes(updateRoomResponse) {
  return {
    type: types.UPDATE_ROOMS_RESPONSE,
    updateRoomRequest: false,
    updateRoomResponse
  };
};
export function updateRoomAction(id, roomId, data) {
  return dispatch => {
    dispatch(updateRoomReq());
    return updateRoom(id, roomId, data)
      .then(response => {
          dispatch(updateRoomRes(response.data));
      })
      .catch(err => {
          dispatch(updateRoomRes(err));
      });
  };
}

// Delete Room
function deleteRoomReq() {
  return {
    type: types.DELETE_ROOMS_REQUEST,
    deleteRoomRequest: true
  };
};
function deleteRoomRes(deleteRoomResponse) {
  return {
    type: types.DELETE_ROOMS_RESPONSE,
    deleteRoomRequest: false,
    deleteRoomResponse
  };
};
export function deleteRoomAction(id, roomId) {
  return dispatch => {
    dispatch(deleteRoomReq());
    return deleteRoom(id, roomId)
      .then(response => {
          dispatch(deleteRoomRes(response.data));
      })
      .catch(err => {
          dispatch(deleteRoomRes(err));
      });
  };
}




// Create Resource
function createResourceReq() {
  return {
    type: types.CREATE_RESOURCE_REQUEST,
    createResourceRequest: true
  };
};
function createResourceRes(createResourceResponse) {
  return {
    type: types.CREATE_RESOURCE_RESPONSE,
    createResourceRequest: false,
    createResourceResponse
  };
};
export function createResourceAction(id, roomId) {
  return dispatch => {
    dispatch(createResourceReq());
    return createResource(id, roomId)
      .then(response => {
          dispatch(createResourceRes(response.data));
      })
      .catch(err => {
          dispatch(createResourceRes(err));
      });
  };
}

// Update Resource
function updateResourceReq() {
  return {
    type: types.UPDATE_RESOURCE_REQUEST,
    updateResourceRequest: true
  };
};
function updateResourceRes(updateResourceResponse) {
  return {
    type: types.UPDATE_RESOURCE_RESPONSE,
    updateResourceRequest: false,
    updateResourceResponse
  };
};
export function updateResourceAction(id, roomId, roomResourceId, data) {
  return dispatch => {
    dispatch(updateResourceReq());
    return updateResource(id, roomId, roomResourceId, data)
      .then(response => {
          dispatch(updateResourceRes(response.data));
      })
      .catch(err => {
          dispatch(updateResourceRes(err));
      });
  };
}

// Delete Resource
function deleteResourceReq() {
  return {
    type: types.DELETE_RESOURCE_REQUEST,
    deleteResourceRequest: true
  };
};
function deleteResourceRes(deleteResourceResponse) {
  return {
    type: types.DELETE_RESOURCE_RESPONSE,
    deleteResourceRequest: false,
    deleteResourceResponse
  };
};
export function deleteResourceAction(id, roomId, roomResourceId) {
  return dispatch => {
    dispatch(deleteResourceReq());
    return deleteResource(id, roomId, roomResourceId)
      .then(response => {
          dispatch(deleteResourceRes(response.data));
      })
      .catch(err => {
          dispatch(deleteResourceRes(err));
      });
  };
}
