import React from "react";
// Components
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
// Types

import { Link } from "react-router-dom";

type Props = {
  character: any;
};

const CharacterCard: React.FC<Props> = ({ character }) => {
  const videoo = character;
  return (
    <Card
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <video
        src={character.trailer}
        autoPlay={true}
        loop
        style={{ width: "100%", height: "100%" }}
      />
      <CardContent
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography gutterBottom variant="h5">
          Name: {character.title}
        </Typography>
        <Typography gutterBottom color="textSecondary">
          descripition: {character.desc}
        </Typography>
        <Typography gutterBottom color="textSecondary">
          limit: +{character.limit}
        </Typography>

        <Typography color="textSecondary">
          <Link to={{ pathname: "/watchVideo", state: { videoo } }}>
            continue to watch
          </Link>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CharacterCard;
