import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import ProjectionGraph from "../components/ProjectionGraph";
import MilestoneProgress from "../components/MilestoneProgress";
import FriendsPieChart from "../components/FriendsPieChart";

const HabitsPage = () => {
  return (
    <Box p={4}>
      <Typography variant="h4" mb={3}>
        Habits & Projections
      </Typography>

      {/* Projection Graph in a Card */}
      <Grid container spacing={3} alignItems="stretch">
        <Grid item xs={12} md={12}>
          <Card sx={{ p: 2, boxShadow: 3, borderRadius: 2, height: "100%" }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Future Heart Rate Projection
              </Typography>
              <ProjectionGraph />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Milestone Progress (Left) | Friends Pie Chart (Right) */}
      <Grid container spacing={3} alignItems="stretch" mt={3}>
        {/* Left - Milestone Progress Card */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              p: 2,
              boxShadow: 3,
              borderRadius: 2,
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6">Milestone Progress</Typography>
              <MilestoneProgress />
            </CardContent>
          </Card>
        </Grid>

        {/* Right - Friends Progress Pie Chart Card */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              p: 2,
              boxShadow: 3,
              borderRadius: 2,
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6">Friends' Progress</Typography>
              <FriendsPieChart />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HabitsPage;
