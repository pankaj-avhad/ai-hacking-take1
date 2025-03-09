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

      {/* Combined: Insights Graph + Health Base Insights */}
      <Grid container spacing={3} alignItems="stretch">
        <Grid item xs={12}>
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
              <Box
                display="flex"
                flexDirection={{ xs: "column", md: "row" }}
                gap={3}
                alignItems="flex-start"
              >
                {/* Left - Graph */}
                <Box flex={1}>
                  <Typography variant="h6" gutterBottom>
                    Heart Rate Trends & Health Base Insights (Last 6 Hours)
                  </Typography>
                  <InsightsGraph />
                </Box>

                {/* Right - Insights Card (Pulled Up) */}
                <Card
                  sx={{
                    p: 2,
                    boxShadow: 2,
                    borderRadius: 2,
                    backgroundColor: "#E3F2FD",
                    borderLeft: "5px solid #1E88E5",
                    flex: 1,
                    alignSelf: "flex-start", // Pulls up to align with header
                  }}
                >
                  <CardContent>
                    <Typography variant="h6">Health Base Insights</Typography>
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
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Combined: Last Week Heart Rate Trends & Weekly Performance Summary */}
      <Grid container spacing={3} alignItems="stretch" mt={4}>
        <Grid item xs={12}>
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
              <Box
                display="flex"
                flexDirection={{ xs: "column", md: "row" }}
                gap={3}
                alignItems="flex-start"
              >
                {/* Left - Weekly Trends */}
                <Box flex={1}>
                  <Typography variant="h6" gutterBottom>
                    Last Week Heart Rate Trends & Performance Summary
                  </Typography>
                  <LastWeekGraph />
                </Box>

                {/* Right - Weekly Performance Summary Card (Pulled Up) */}
                <Card
                  sx={{
                    p: 2,
                    boxShadow: 2,
                    borderRadius: 2,
                    backgroundColor: "#E8F5E9",
                    borderLeft: "5px solid #43A047",
                    flex: 1,
                    alignSelf: "flex-start", // Pulls up to align with header
                  }}
                >
                  <CardContent>
                    <Typography variant="h6">
                      Weekly Performance Summary
                    </Typography>
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
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Navigation Button */}
      <Box textAlign="center" mt={8}>
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
