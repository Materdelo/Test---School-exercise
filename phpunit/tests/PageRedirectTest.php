<?php
    use PHPUnit\Framework\TestCase;
    require 'src/PageRedirect.php';

    class PageRedirectTest extends TestCase {
        public function setUp(): void {
            $this->instance = new PageRedirect();
        }

        public function tearDown(): void {
            unset($this->instance);
        }

        public function testPageRedirectory() {
            // given
            $expected = "?svc=courses&id=tida&lesson=2&class=4tp";
            // when
            $actual = $this->instance->PageRedirect("tida", 2, "4tp");
            // then
            $this->assertEquals($expected, $actual);
        }
        public function testInvalidId() {
            // given
            $expected = "Invalid Id";
            // when
            $actual = $this->instance->PageRedirect("ziba", 2, "4tp");
            // then
            $this->assertEquals($expected, $actual);
        }
        public function testInvalidLesson() {
            // given
            $expected = "Invalid lesson";
            // when
            $actual = $this->instance->PageRedirect("tida", 12, "4tp");
            // then
            $this->assertEquals($expected, $actual);
        }
        public function testInvalidClass() {
            // given
            $expected = "Invalid class";
            // when
            $actual = $this->instance->PageRedirect("tida", 2, "6tp");
            // then
            $this->assertEquals($expected, $actual);
        }
    }
?>
