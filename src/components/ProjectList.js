import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import useApi from '../hooks/useApi';
import './styles/projects.css'; // Import your CSS file

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
      <h2 className="mb-4 mt-4">Our Projects</h2>
      <Row>
        {projects.map((project) => (
          <Col sm="3" key={project.id} className="mb-4">
            <Card className="h-100">
              <CardBody>
                <CardTitle tag="h5">{project.attributes.Name}</CardTitle>
                <CardText className="limited-description">{project.attributes.Description}</CardText>
                <Button href={`/projects/${project.id}`} color="primary">View Details</Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProjectList;
