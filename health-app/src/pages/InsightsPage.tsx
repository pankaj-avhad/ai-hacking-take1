import {
  Box,
  Button,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import InsightsGraph from "../components/InsightsGraph";
import LastWeekGraph from "../components/LastWeekGraph";
import { useNavigate } from "react-router-dom";

const InsightsPage = () => {
  const navigate = useNavigate();

  return (
    <Box p={4}>
      <Typography variant="h4" mb={3}>
        Insights
      </Typography>

      {/* Insights Graph (Left) | Card (Right) */}
      <Grid container spacing={3} alignItems="stretch">
        {/* Left - Graph Inside a Card */}
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2, boxShadow: 3, borderRadius: 2, height: "100%" }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Heart Rate Trends (Last 6 Hours)
              </Typography>
              <InsightsGraph />
            </CardContent>
          </Card>
        </Grid>

        {/* Right - Bullet Points Inside a Card */}
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
              <Typography variant="h6">Base Health Insights</Typography>
              <List>
                {[
                  "Your average heart rate is stable.",
                  "Nighttime heart rate is slightly elevated.",
                  "Good recovery after workouts.",
                  "Heart rate spikes detected during stress.",
                  "No abnormal rhythms detected.",
                  "Consistent resting heart rate.",
                  "You have maintained healthy activity levels.",
                  "Deep sleep phases improving.",
                  "Hydration may impact heart rate variations.",
                  "Keep monitoring for any irregular patterns.",
                ].map((point, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={`• ${point}`} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Last Week Graph (Right) | Card (Left) */}
      <Grid container spacing={3} alignItems="stretch" mt={4}>
        {/* Left - Weekly Summary Card */}
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
              <Typography variant="h6">Weekly Performance Summary</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="✅ Achievements: Maintained average heart rate below 80 bpm" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="✅ Improved recovery time after exercise" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="✅ Reduced stress spikes by 15%" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="❌ Missed: Lowering evening heart rate" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="❌ Need more consistency in workout patterns" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="❌ Sleep cycle fluctuations detected" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Right - Last Week Graph Inside a Card */}
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2, boxShadow: 3, borderRadius: 2, height: "100%" }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Last Week Heart Rate Analysis
              </Typography>
              <LastWeekGraph />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Navigation Button */}
      <Box textAlign="center" mt={6}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/habits")}
          sx={{ px: 4, py: 1.5, fontSize: "1rem", borderRadius: 2 }}
        >
          What's Next?
        </Button>
      </Box>
    </Box>
  );
};

export default InsightsPage;
