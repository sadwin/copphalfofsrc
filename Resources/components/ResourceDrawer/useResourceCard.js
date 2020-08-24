import React from "react";
import api from "../../api/resources";

const initialData = {
  card: null,
  specialities: [],
  worldSkills: []
};

export default function useResourceCard() {
  const [resourceCard, setResourceCard] = React.useState(initialData);

  function getResourceCard(id) {
    Promise.all([
      api.getResourceCard(id),
      api.getResourceSpecialities(id),
      api.getResourceWorldSkills(id)
    ]).then(([card, specialities, worldSkills]) => {
      setResourceCard({
        card: card.data,
        specialities: specialities.data,
        worldSkills: worldSkills.data
      });
    });
  }

  function resetCard() {
    setResourceCard(initialData)
  }

  return { getResourceCard, resourceCard, resetCard };
}
