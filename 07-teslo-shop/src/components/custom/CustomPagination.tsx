import { useSearchParams } from 'react-router';

import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Button } from '../ui/button';

interface Props {
  totalPages: number;
}

export const CustomPagination = ({ totalPages }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const queryPage = searchParams.get('page') || 1;
  const page = isNaN(+queryPage) ? 1 : +queryPage;

  const handlePageChange = (pageNumber: number) => {
    if (page < 1 || page > totalPages) return;

    setSearchParams(prev => {
      prev.set('page', pageNumber.toString());
                  
      return prev;
    });
  };

  return (
    <div className="flex flex-wrap items-center justify-center space-x-2 gap-y-4">
      <Button
        variant="outline"
        size="sm"
        disabled={page === 1}
        onClick={ () => handlePageChange(page - 1) }
      >
        <ChevronLeft className="h-4 w-4" />
        Anterior
      </Button>

      {
        Array.from({ length: totalPages }).map((_, index) => (
          <Button
            size="sm"
            key={index}
            variant={ page === index + 1 ? 'default' : 'outline' }
            onClick={ () => handlePageChange(index + 1) }
          >
            { index + 1}
          </Button>
        ))
      }

      <Button
        variant="outline"
        size="sm"
        disabled={page === totalPages}
        onClick={ () => handlePageChange(page + 1) }
      >
        Siguiente
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};
