import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Typography, Button, Input } from "@material-tailwind/react";

export function TableHeader() {
    return (
      <section className="container mx-auto py-20 px-8">
        <div className="flex justify-between md:items-center gap-y-4 flex-col md:flex-row">
          <div>
            <Typography className="font-bold">Members List</Typography>
            <Typography variant="small" className="font-normal text-gray-600">
              See information about all members
            </Typography>
          </div>
          <div className="flex gap-2">
            <div className="lg:w-96">
              <Input
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
            <Button>add member</Button>
          </div>
        </div>
      </section>
    );
  }
