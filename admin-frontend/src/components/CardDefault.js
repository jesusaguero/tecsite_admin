import {
    Card,
    CardBody,
    CardHeader,
    Typography
} from "@material-tailwind/react";
import React from 'react';

const CardDefault = ({ title, imageSrc, description, buttonText, imageWidth, imageHeight }) => {
  return (
    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src={imageSrc}
          alt="card-Image"
          style={{ width: imageWidth, height: imageHeight }}
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" color="blue-gray" className="mb-2">
        {title}
        </Typography>
      </CardBody>

    </Card>
  );
}

export default CardDefault;
