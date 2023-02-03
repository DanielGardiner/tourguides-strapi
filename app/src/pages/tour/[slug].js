import { useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import useTour from "@/hooks/useTour";
import lockIcon from "/public/icons/lock-icon.svg";
import { cmsUrl } from "@/constants";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import useUser from "@/hooks/useUser";

function limitDescriptionLength(description) {
  if (!description) return null;

  if (description.length <= MAXMIMUM_DESCRIPTION_CHARACTERS) return description;

  return `${description.substring(0, MAXMIMUM_DESCRIPTION_CHARACTERS)}...`;
}

export default function Tour() {
  const router = useRouter();
  const { slug } = router.query;

  const { data, isLoading } = useTour(slug);
  const tour = data?.data[0]?.attributes;

  const { data: user } = useUser();

  return (
    <>
      <Container className="mt-4">
        {isLoading ? (
          <Spinner variant="primary" />
        ) : (
          <>
            <h1>{tour.title}</h1>
            {tour?.tourSteps?.map((step, i) => {
              const imagePath = step?.image?.data?.attributes?.url;
              const imageUrl = imagePath ? `${cmsUrl}${imagePath}` : null;

              const audioPath = step?.audio?.data?.attributes?.url;
              const audioUrl = audioPath ? `${cmsUrl}${audioPath}` : null;

              return (
                <Row
                  key={step.id}
                  className={`${
                    i === 0 ? "mt-5" : "pt-5"
                  } timeline-line position-relative ps-4 d-lg-flex justify-content-between
                  `}
                >
                  <Col xs={12} md={6} className="position-relative">
                    <h6 className="timeline-point">Step {i + 1}</h6>
                    <h5>{step.title}</h5>
                    {user || step.isFree ? (
                      <>
                        <audio controls className="mt-3 mb-4">
                          <source src={audioUrl} type="" />
                        </audio>
                        <TourDescription
                          description={step.description}
                          isFree={step.isFree}
                        />
                      </>
                    ) : (
                      <img src={lockIcon.src} alt="" className="my-4" />
                    )}
                    <hr className="d-none d-lg-block mw-300px" />
                  </Col>
                  <Col xs={12} md={5}>
                    <div
                      className="position-relative overflow-hidden"
                      style={{ paddingTop: "56.25%" }}
                    >
                      <img
                        src={imageUrl}
                        alt=""
                        className="w-100 h-100 top-0 object-fit-cover rounded-2 position-absolute"
                      />
                    </div>
                  </Col>
                </Row>
              );
            })}
          </>
        )}
      </Container>
    </>
  );
}

const MAXMIMUM_DESCRIPTION_CHARACTERS = 300;

function TourDescription({ description }) {
  const [showFullDescription, setShowFullDescription] = useState(
    description.length <= MAXMIMUM_DESCRIPTION_CHARACTERS
  );

  const handleReadMoreClick = () => {
    setShowFullDescription(true);
  };

  if (!description) return null;

  const originalDescription = description;
  const limitedDescription = limitDescriptionLength(description);

  return (
    <>
      {showFullDescription ? (
        <p>{originalDescription}</p>
      ) : (
        <>
          <p>{limitedDescription}</p>
          <p onClick={handleReadMoreClick} role="button" className="m-0">
            Read more &rarr;
          </p>
        </>
      )}
    </>
  );
}
