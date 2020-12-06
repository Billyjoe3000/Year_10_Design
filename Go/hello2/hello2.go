// this does not work, see hello3.go
package main

import (
	"fmt"
	"example.com/greetings"
)

func main() {
	message := greetings.Hello("Gladys")
	fmt.Println(message)
}