import * as React from "react";
import styled from "styled-components";
import { RiMailLine } from "react-icons/ri";
import { Container } from "../../Container";
import { Button } from "../../Button";
import { Section } from "../../Section";
import { Modal } from "../../Modal";

const NewsletterInnerContainer = styled(Container)`
  text-align: center;
`;

export function Newsletter() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Section>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <iframe
            src="https://0806de2d.sibforms.com/serve/MUIEAHIcZ4oB1dfXYhFNGM7yQk5C6WI7VeAg_3aHo1MLi16FEHfRbmqgqRT68gHZD0mupU4fgkJVq3HMjvVLBG1nwXwzWXItN1pmPvqibXfGkgarq9LolotXzLkfR46tOV5TtPf6FczlEac50NZEoM4s1ZhZUYpAItIwxWuITpAQT222iKZRLO0uzXMY2RmjNC9SFQdEDoyPrGKx"
            frameBorder="0"
            scrolling="auto"
            allowFullScreen
            style={{
              width: "540px",
              height: "700px",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              maxWidth: "100%",
            }}
          />
        </Modal>
      )}
      <NewsletterInnerContainer>
        <Button
          type="button"
          size="large"
          endIcon={<RiMailLine />}
          onClick={() => setIsOpen(true)}
        >
          S'inscrire à la newsletter Trackdéchets
        </Button>
      </NewsletterInnerContainer>
    </Section>
  );
}
