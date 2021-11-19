import {GET_DATA, FETCH_DATA, DELETE_DATA} from './actionType';

import firestore from '@react-native-firebase/firestore';

export const getData = data => {
  return async dispatch => {
    console.log(data);
    await firestore()
      .collection('Data')
      .add(data)
      .then(() => {
        console.log('Post Added !');
        alert('Data Successfully Uploaded to Server !!');
      });
    dispatch(fetchData()).catch(error => {
      console.log(error);
    });
  };
};
export const fetchData = () => {
  return async dispatch => {
    let list = [];
    await firestore()
      .collection('Data')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const {title, description, category, id} = doc.data();
          list.push({
            title: title,
            category: category,
            description: description,
            id: id,
          });
        });
        if (list) {
          console.log(list);
          dispatch({
            type: FETCH_DATA,
            payload: list,
          });
        } else {
          console.log('unable to fetch');
        }
      })

      .catch(error => {
        console.log(error);
      });
  };
};
export const deleteData=(id)=>{
return async dispatch=>{
 const snapshot=   await firestore().collection("Data")
   .limit(1).where("id", "==", id).get();
    console.log("snapshot",snapshot.docs)
   const doc= snapshot.docs[0];
   doc.ref.delete()
   .then(()=>{
       console.log('deletedID', doc.id)
       alert("Record successfully deleted")
   })
   dispatch(fetchData())
   .catch(error=>{
       console.log(error)
   })
}
}
export const updateData=(id)=>{
    return async dispatch=>{
        const snapshot= await firestore().collection("Data")
        .limit(1).where("id", "==", id).get();
        console.log("snapshot", snapshot.docs)
        const doc= snapshot.docs[0]
        doc.ref.update({
            title: "jit adlak",
            category:"testhjkdshfjkdshf",
            description:"gdhjadhjdhjad",
            id: id
        })
        .then(()=>{
            alert("Record successfully updated")
        })
        dispatch(fetchData())
        .catch(error=>{
            console.log(error)
        })
    }
}