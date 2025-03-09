import { Box, Button, Typography } from "@mui/material";
import InsightsGraph from "../components/InsightsGraph";
import LastWeekGraph from "../components/LastWeekGraph";
import { useNavigate } from "react-router-dom";

const InsightsPage = () => {
  const navigate = useNavigate();

  return (
    <Box p={4}>
      <Typography variant="h4" mb={3}>Insights</Typography>
      <Box display="flex" flexDirection="column" gap={3}>
        <InsightsGraph />
        <LastWeekGraph />
      </Box>
      <Button variant="contained" color="primary" onClick={() => navigate("/habits")} sx={{ mt: 3 }}>
        What's Next?
      </Button>
    </Box>
  );
};

export default InsightsPage;
