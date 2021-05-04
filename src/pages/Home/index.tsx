import { FC } from "react";
import {
  makeStyles,
  GridList,
  GridListTile,
  Theme,
  List,
  ListItem,
  Card,
  ListItemAvatar,
  Avatar,
  Typography,
  ListItemText,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: "calc(100vh - 150px)",
  },
  listContainer: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));
const Home: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography>List Contact</Typography>
      <List className={classes.listContainer}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e) => (
          <ListItem>
            <ListItemAvatar>
              <Avatar src="https://picsum.photos/200" />
            </ListItemAvatar>
            <ListItemText>Refactory</ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Home;
