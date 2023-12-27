export const GET_SESSION_WORKING = (id) =>
  `/working-times?populate=workingPlan&doctorId=${id}&limit=10000`;
