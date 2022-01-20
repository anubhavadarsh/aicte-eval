import { createSlice } from "@reduxjs/toolkit";

const teamSlice = createSlice({
  name: "team",
  initialState: {
    members: [],
  },
  reducers: {
    addMember(state, action) {
      const existingMember = state.members.find(
        (member) => member.id === action.payload.id
      );

      if (existingMember) return;

      state.members.push({
        id: action.payload.id,
        image: action.payload.image,
        name: action.payload.name,
        designation: action.payload.designation,
        about: action.payload.about,
        socials: {
          twitter: action.payload.twitter,
          facebook: action.payload.facebook,
          instagram: action.payload.instagram,
        },
      });
    },
    removeMember(state, action) {
      state.members = state.members.filter(
        (member) => member.id !== action.payload.id
      );
    },
    editMember(state, action) {
      for (let member of state.members) {
        if (member.id === action.payload.id) {
          member.image = action.payload.image;
          member.name = action.payload.name;
          member.designation = action.payload.designation;
          member.about = action.payload.about;
          member.socials.facebook = action.payload.facebook;
          member.socials.twitter = action.payload.twitter;
          member.socials.instagram = action.payload.instagram;

          break;
        }
      }
    },
  },
});

export const teamAction = teamSlice.actions;

export default teamSlice;
