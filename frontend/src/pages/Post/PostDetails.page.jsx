import { Link, useLoaderData } from "react-router-dom";
import DOMAIN from "../../services/endpoint";
import axios from "axios";
import { Button, Container, Avatar, Text, Group } from "@mantine/core";
//import { Avatar, Text, Group } from '@mantine/core';
//import { IconPhoneCall, IconAt } from '@tabler/icons-react';
import classes from './Post.module.css';

export function PostDetailsPage() {
 const postData = useLoaderData();
  return (
    <>
      <Container className={classes.container}>
        <div>
      <Group wrap="nowrap">
        <Avatar
          src={postData.image}
          size={350}
          radius="md"
        />
        <div>
        <Text fz="lg" fw={500} className={classes.name}>
            <span className={classes.categoryName}>Author</span>: {postData.author} 
          </Text>
         

          <Text fz="lg" fw={500} className={classes.name}>
          <span className={classes.categoryName}>Title:</span> {postData.title} 
          </Text>
          
          <Text fz="lg" fw={500} className={classes.name}>
          <span className={classes.categoryName}>Category:</span> {postData.category}
          </Text>
          
          
          <Text fz="lg" fw={500} className={classes.name}>
          <span className={classes.categoryName}>Content:</span> {postData.content}
          </Text>

          
      <Button mt={50}>
          <Link to="/update">Update</Link>
        </Button>

      </div>
      

          </Group>

    </div>

        <Button mt={50}>
          <Link to="/posts">Back to Posts</Link>
        </Button>
      </Container>
    </>
  );
}

export const postDetailsLoader = async ({ params }) => {
  const res = await axios.get(`${DOMAIN}/api/posts/${params.id}`);
  return res.data;
};

export default PostDetailsPage;
