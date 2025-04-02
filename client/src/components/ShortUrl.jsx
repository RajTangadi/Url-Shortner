import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

 function ShortUrl() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="Enter Your link here" />
      <Button type="submit">Shorten URL</Button>
    </div>
  )
}

export default ShortUrl;
