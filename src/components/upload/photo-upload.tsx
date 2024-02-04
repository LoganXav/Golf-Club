import { Icons } from '../icons';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';

export function PhotoUpload() {
  return (
    <div className="flex items-center gap-6">
      <div className="flex h-20 w-20 cursor-pointer items-center justify-center rounded-full border border-dashed bg-input lg:h-32 lg:w-32">
        <Icons.camera />
      </div>
      <div className="space-y-2">
        <p>Add a Photo to Your Profile (Optional)</p>
        <Dialog>
          <DialogTrigger>
            <Button>Add Photo</Button>
          </DialogTrigger>
          <DialogContent className="absolute">
            <DialogTitle className="pb-8 font-reckless text-3xl">
              Add a Photo
            </DialogTitle>
            <div className="mx-auto flex h-full w-full flex-col items-center justify-center space-y-4 rounded-md border border-dashed bg-input py-16">
              <div className="overflow-hidden rounded-full border border-foreground">
                <Icons.person />
              </div>
              <p className="text-lg">Drag & Drop a Photo Here</p>
              <span>or</span>
              <Button>Add Photo</Button>
              <span>File Types: JPEG, PNG, GIF. Size limited to 4 MB</span>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
