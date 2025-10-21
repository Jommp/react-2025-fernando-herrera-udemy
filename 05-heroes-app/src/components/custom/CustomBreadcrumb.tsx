import { Link } from 'react-router';

import { SlashIcon } from 'lucide-react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';


interface Props {
  currentPage: string;
  breadcrumbs?: Breadcrumb[];
}

interface Breadcrumb {
  label: string;
  to: string;
}

export const CustomBreadcrumb = ({ currentPage, breadcrumbs = [] }: Props) => {
  return (
    <Breadcrumb className="my-5">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/">Inicio</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {
          breadcrumbs.map(crumb => (
            <div
              className="flex items-center"
              key={crumb.label}
            >
              <BreadcrumbSeparator className="mr-2">
                <SlashIcon />
              </BreadcrumbSeparator>

              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to={ crumb.to }>
                    { crumb.label }
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </div>
          ))
        }

        <BreadcrumbSeparator>
          <SlashIcon />
        </BreadcrumbSeparator>

        <BreadcrumbItem>
          <BreadcrumbLink className="font-bold">
            { currentPage }
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
