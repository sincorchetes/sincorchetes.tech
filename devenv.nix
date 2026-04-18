{ pkgs, ... }:

{
  cachix.enable = false;

  languages.javascript = {
    enable = true;
    bun.enable = true;
    directory = "./site";
  };

  scripts = {
    dev.exec = ''cd site && bun install && bun x --bun astro dev'';
    build.exec = ''cd site && bun install && bun x --bun astro build'';
  };

  enterShell = ''
    echo "Sincorchetes.tech environment"
    echo ""
    echo "Available commands:"
    echo "  dev    - Start the development server"
    echo "  build  - Build the static site"
    echo "  serve  - Serve the generated static files"
    echo ""
    bun --version
  '';
}