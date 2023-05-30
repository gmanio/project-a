"use client";
import { currentSite, openDrawer } from "@/store/atoms";
import { useAtom } from "jotai";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type Props = { data: any };

const SiteCard = ({ data }: Props) => {
  const router = useRouter();
  const [expanded, setExpanded] = useAtom(currentSite);
  const [isOpenDrawer, setIsOpenDrawer] = useAtom(openDrawer);

  const handleRoute = () => {
    setIsOpenDrawer(false);
    router.push(`https://www.epsd.co.kr/${data.title}/`);
  };

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : null);
    };

  return (
    <Accordion
      expanded={expanded === data.title}
      onChange={handleChange(data.title)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography sx={{ width: "33%", flexShrink: 0 }}>
          {data.title}
        </Typography>
        <Typography sx={{ color: "text.secondary" }}>
          <div
            dangerouslySetInnerHTML={{
              __html: data.contents
                .map((content: any) => content.title)
                .join(""),
            }}
          />
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <div
            dangerouslySetInnerHTML={{
              __html: data.contents
                .map((content: any) => content.description)
                .join(""),
            }}
          />
        </Typography>
        <Typography
          sx={{
            mt: 2,
            display: "inline-flex",
            textDecoration: "underline",
            cursor: "pointer",
          }}
          onClick={handleRoute}
        >
          자세히 알아보기
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default SiteCard;
