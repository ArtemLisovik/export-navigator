import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";

import { db } from 'config/firebase'
import { getImage } from "helpers/getImage";



export const getTeam = createAsyncThunk('team/fetchTeam', async (_,) => {
    const querySnapshot = await getDocs(collection(db, "team"));
    let teamList: any = []
  
    for (const doc of querySnapshot.docs) {
      const avatar = await getImage(`team/${doc.data().name}.jpg`)
      const result = doc.data()
      const trusteeItem = {...result, avatar}
  
      teamList.push(trusteeItem)
    };
  
    return teamList
  })