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
            src="https://app.mailjet.com/widget/iframe/3F7D/EA4"
            style={{ border: 0, width: "100%", height: "400px" }}
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
