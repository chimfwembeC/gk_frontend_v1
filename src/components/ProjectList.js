import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import useApi from '../hooks/useApi';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const { getProjects } = useApi();

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects();
      setProjects(data);
    };
    fetchProjects();
  }, [getProjects]);

  return (
    <Container>    
      <Row>
        {projects.map((project) => (
          <Col sm="4" key={project.id}>
            <Card>                
              <CardBody>
                <CardTitle tag="h5">{project.attributes.Name}</CardTitle>
                <CardText>{project.attributes.Description}</CardText>
                <Button href={`/projects/${project.id}`}>View Details</Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProjectList;
