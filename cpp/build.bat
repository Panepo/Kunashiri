emcc fibonacci.cpp -Os -s WASM=1 -s SIDE_MODULE=1 -s EXPORTED_FUNCTIONS='["factorialize, factorializeFib"]' -o fibonacci.wasm
