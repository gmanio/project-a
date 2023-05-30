import { mock_places } from "@/_mocks/handlers";
import SiteCard from "@/components/SiteCard";
import { Box } from "@mui/material";

const SiteList = () => {
  const sites = mock_places;

  return (
    <Box sx={{ mb: 2 }}>
      {sites &&
        sites.map((site, index) => {
          return <SiteCard data={site} key={index} />;
        })}
    </Box>
  );
};

export default SiteList;
