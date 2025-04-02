import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { QRCodeSVG } from "qrcode.react";

const LinkShortener = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/shorten", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ longUrl }),
      });
      const data = await response.json();
      setShortUrl(data.shortUrl);
    } catch (err) {
      setError("An error occurred while shortening the URL");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>URL Shortener</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Input
            type="url"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            placeholder="Enter long URL"
            required
          />
          <Button type="submit" className="mt-2 w-full">
            Shorten
          </Button>
        </form>
      </CardContent>
      <CardFooter>
        {shortUrl && (
          <>
            <Alert>
              <AlertDescription>
                Short URL:{" "}
                <a href={shortUrl} target="_blank" rel="noopener noreferrer">
                  {shortUrl}
                </a>
              </AlertDescription>
            </Alert>
            <QRCodeSVG value={shortUrl} size={128} />
          </>
        )}
        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
      </CardFooter>
    </Card>
    </div>
  );
};
export default LinkShortener;
