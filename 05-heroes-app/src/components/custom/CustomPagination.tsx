import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Button } from '../ui/button';

interface Props {
  totalPages: number;
}

export const CustomPagination = ({ totalPages }: Props) => {
  const currentPage = 1 as number;

  return (
    <div className="flex items-center justify-center space-x-2">
      <Button
        variant="outline"
        size="sm"
        disabled={currentPage === 1}
      >
        <ChevronLeft className="h-4 w-4" />
        Anterior
      </Button>

      {
        Array.from({ length: totalPages }).map((_, index) => (
          <Button
            size="sm"
            key={index}
            variant={ currentPage === index + 1 ? 'default' : 'outline' }
          >
            { index + 1}
          </Button>
        ))
      }

      <Button
        variant="outline"
        size="sm"
        disabled={currentPage === totalPages}
      >
        Siguiente
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};
