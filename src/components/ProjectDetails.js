import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, CardBody, CardTitle, CardText, Button, CardImg, CardImgOverlay } from 'reactstrap';
import useApi from '../hooks/useApi';
import { CartContext } from '../context/CartContext';

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const { getProject } = useApi();
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProject = async () => {
      const data = await getProject(id);
      setProject(data);
    };
    fetchProject();
  }, [id, getProject]);

  if (!project) return <div>Loading...</div>;

  const { Name, Description, Type, Materials, Start_Date, Status, Budget, Client_Name, Location, Additional_Notes, Photos } = project.attributes;

  const handleAddToCart = () => {
    addToCart({ id: project.id, name: Name, description: Description, price: Budget });
  };

  return (
    <Container>
      <Card>
        <CardBody>
          <CardTitle tag="h5">{Name}</CardTitle>
          <CardText><strong>Description:</strong> {Description}</CardText>
          <CardText><strong>Type:</strong> {Type}</CardText>
          <CardText><strong>Materials:</strong> {Materials}</CardText>
          <CardText><strong>Start Date:</strong> {Start_Date}</CardText>
          <CardText><strong>Status:</strong> {Status}</CardText>
          <CardText><strong>Budget:</strong> ${Budget}</CardText>
          <CardText><strong>Client Name:</strong> {Client_Name}</CardText>
          <CardText><strong>Location:</strong> {Location}</CardText>
          <CardText><strong>Additional Notes:</strong></CardText>
          {Additional_Notes.map((note, index) => (
            <CardText key={index}>{note.children[0].text}</CardText>
          ))}
          <Button onClick={handleAddToCart}>Add to Cart</Button>
        </CardBody>
      </Card>
      {Photos && (
        <div>
          <h4>Photos</h4>
          <Container>
            <div className="row">
              {Photos.map((photo, index) => (
                <div className="col-md-3" key={index}>
                  <Card>
                    <CardImg top width="100%" src={photo.url} alt={`Photo ${index + 1}`} />
                    <CardImgOverlay>
                      <CardTitle tag="h5">Photo {index + 1}</CardTitle>
                    </CardImgOverlay>
                  </Card>
                </div>
              ))}
            </div>
          </Container>
        </div>
      )}
    </Container>
  );
};

export default ProjectDetails;
