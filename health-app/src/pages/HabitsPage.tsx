import { Box, Typography } from "@mui/material";
import ProjectionGraph from "../components/ProjectionGraph";
import MilestoneProgress from "../components/MilestoneProgress";
import FriendsPieChart from "../components/FriendsPieChart";

const HabitsPage = () => {
  return (
    <Box p={4}>
      <Typography variant="h4" mb={3}>Habits & Projections</Typography>
      <ProjectionGraph />
      <Box display="flex" gap={4} mt={3}>
        <MilestoneProgress />
        <FriendsPieChart />
      </Box>
    </Box>
  );
};

export default HabitsPage;
