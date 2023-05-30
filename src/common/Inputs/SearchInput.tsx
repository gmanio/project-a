"use client";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { mock_sites } from "@/_mocks/handlers";
import { useNavermaps } from "react-naver-maps";
import { useAtom } from "jotai";
import { naverMap } from "@/store/atoms";

const SearchInput = () => {
  const navermaps = useNavermaps();
  const [map, setMap] = useAtom(naverMap);
  const places = Object.entries(mock_sites).flatMap(
    ([key, site]) => site.place
  );
  const list = places.map((place) => ({
    label: place.korean,
    data: place,
  }));

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <Autocomplete
        noOptionsText="검색 결과가 없습니다."
        placeholder="에피소드 검색"
        disablePortal
        id="combo-box-demo"
        size="small"
        options={list}
        sx={{ width: "200px" }}
        onChange={(event: any, newValue: any | null) => {
          if (event && event.target && newValue) {
            const target = new navermaps.LatLng(
              newValue.data.lat,
              newValue.data.lng
            );
            if (map) {
              map.setCenter(target);
              map.setZoom(14);
            }
          }
        }}
        renderInput={(params) => (
          <StyledInputBase {...params} placeholder="에피소드 검색" />
        )}
      />
    </Search>
  );
};

export default SearchInput;

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 1),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 1),
  },
  marginLeft: 0,
  width: "auto",
  // [theme.breakpoints.up("sm")]: {
  //   marginLeft: theme.spacing(1),
  //   width: "auto",
  // },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(TextField)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    height: 20,
    // marginLeft: `calc(1em + ${theme.spacing(4)})`,
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    // [theme.breakpoints.up("xs")]: {
    //   width: "100px",
    //   "&:focus": {
    //     width: "120px",
    //   },
    // },
  },
}));
