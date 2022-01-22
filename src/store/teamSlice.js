import { createSlice } from "@reduxjs/toolkit";

const teamSlice = createSlice({
  name: "team",
  initialState: {
    members: [],
    category: {
      sl: null,
      category: null,
      points: null,
    },
    activities: {
      totalPoints: 0,
      totalWeeks: 0,
      activities: [],
    },
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
    addCategory(state, action) {
      state.category.sl = action.payload.sl;
      state.category.category = action.payload.category;
      state.category.points = action.payload.points;
    },
    addActivity(state, action) {
      const existingActivity = state.activities.activities.find(
        (activity) => activity.sl === action.payload.sl
      );

      if (existingActivity) return;

      state.activities.activities.push({
        sl: action.payload.sl,
        activity: action.payload.activity,
        weeks: action.payload.weeks,
        hours: action.payload.hours,
        points: action.payload.points,
        startTimeStamp: action.payload.startTimeStamp,
        members: [],
        completed: 0,
      });

      state.activities.totalPoints += action.payload.points;
      state.activities.totalWeeks += action.payload.weeks;
    },
    removeActivity(state, action) {
      state.activities.activities = state.activities.activities.filter(
        (activity) => activity.sl !== action.payload.sl
      );

      state.activities.totalPoints -= action.payload.points;
      state.activities.totalWeeks -= action.payload.weeks;
    },
    resetActivities(state) {
      state.activities.activities = [];
      state.activities.totalPoints = 0;
      state.activities.totalWeeks = 0;
    },
    addMemberToAct(state, action) {
      for (let activity of state.activities.activities) {
        if (activity.sl === action.payload.sl) {
          const existingMember = activity.members.find(
            (member) => member.id === action.payload.member.id
          );
          if (existingMember) return;

          activity.members.push(action.payload.member);
          break;
        }
      }
    },
    remMemberToAct(state, action) {
      for (let activity of state.activities.activities) {
        if (activity.sl === action.payload.sl) {
          activity.members = activity.members.filter(
            (member) => member.id !== action.payload.id
          );
          break;
        }
      }
    },
  },
});

export const teamAction = teamSlice.actions;

export default teamSlice;
