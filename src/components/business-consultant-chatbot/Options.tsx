
import { Button } from "@/components/ui/button";
import { Option } from "./types";

interface OptionsProps {
  options: Option[];
  onOptionClick: (option: Option) => void;
  disabled: boolean;
}

export const Options = ({ options, onOptionClick, disabled }: OptionsProps) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center p-2">
      {options.map((option, index) => (
        <Button
          key={index}
          variant="outline"
          size="sm"
          className="border-brand-lime text-brand-lime hover:bg-brand-lime hover:text-brand-navy"
          onClick={() => onOptionClick(option)}
          disabled={disabled}
        >
          {option.text}
        </Button>
      ))}
    </div>
  );
};
