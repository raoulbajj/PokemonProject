import { useState } from "react";
import Pokemon from "../models/pokemon";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);

  const openModal = (pokemon: Pokemon) => {
    setSelectedPokemon(pokemon);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedPokemon(null);
    setIsOpen(false);
  };

  return { isOpen, openModal, closeModal, selectedPokemon };
};
