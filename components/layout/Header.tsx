import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export const Header = () => {
  return (
    <div className="flex  min-h-screen w-1/6 flex-col justify-around items-center bg-green-500 px-4">
      <h1>Logo poto</h1>
      <nav className="flex justify-between items-center p-4 ">
        <ul className="flex space-y-4 flex-col">
          <Link
            className={buttonVariants({ variant: "outline" })}
            href="/notices"
          >
            Conseils avant utilisation
          </Link>
          <Link
            className={buttonVariants({ variant: "outline" })}
            href="/configuration"
          >
            Configuration & Reglagles
          </Link>
          <Link
            className={buttonVariants({ variant: "outline" })}
            href="savings"
          >
            Suivi epargne
          </Link>
          <Link
            className={buttonVariants({ variant: "outline" })}
            href="liability"
          >
            Suivi dettes
          </Link>
        </ul>
      </nav>
    </div>
  );
};
