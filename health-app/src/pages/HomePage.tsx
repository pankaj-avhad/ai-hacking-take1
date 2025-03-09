import { Box, Button, Switch, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [labMode, setLabMode] = useState(false);
  const navigate = useNavigate();

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
      <Typography variant="h4">Select Device</Typography>
      <Box display="flex" gap={2} mt={2}>
        {["Apple", "Garmin", "Ring"].map((device) => (
          <Box key={device} p={3} border="1px solid gray" borderRadius={2}>
            <Typography>{device}</Typography>
          </Box>
        ))}
      </Box>
      <Box mt={2}>
        <Typography>Lab Mode</Typography>
        <Switch checked={labMode} onChange={() => setLabMode(!labMode)} />
      </Box>
      {!labMode && (
        <Button variant="contained" color="primary" onClick={() => navigate("/insights")} sx={{ mt: 3 }}>
          Go to Insights
        </Button>
      )}
    </Box>
  );
};

export default HomePage;
