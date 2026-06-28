// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="index.html"><strong aria-hidden="true">1.</strong> Thoát Porn Luận</a></li><li class="chapter-item expanded "><a href="02.html"><strong aria-hidden="true">2.</strong> Phương pháp dễ dàng</a></li><li class="chapter-item expanded "><a href="03.html"><strong aria-hidden="true">3.</strong> Vì sao bỏ porn lại khó đến vậy?</a></li><li class="chapter-item expanded "><a href="04.html"><strong aria-hidden="true">4.</strong> Bản năng</a></li><li class="chapter-item expanded "><a href="05.html"><strong aria-hidden="true">5.</strong> Sự tẩy não</a></li><li class="chapter-item expanded "><a href="06.html"><strong aria-hidden="true">6.</strong> Các khía cạnh của sự tẩy não</a></li><li class="chapter-item expanded "><a href="07.html"><strong aria-hidden="true">7.</strong> Ta đang từ bỏ điều gì?</a></li><li class="chapter-item expanded "><a href="08.html"><strong aria-hidden="true">8.</strong> Thời gian</a></li><li class="chapter-item expanded "><a href="09.html"><strong aria-hidden="true">9.</strong> Sức khỏe</a></li><li class="chapter-item expanded "><a href="10.html"><strong aria-hidden="true">10.</strong> Những lợi ích khi trở thành một con nghiện Porn</a></li><li class="chapter-item expanded "><a href="11.html"><strong aria-hidden="true">11.</strong> Phương pháp ý chí</a></li><li class="chapter-item expanded "><a href="12.html"><strong aria-hidden="true">12.</strong> Cẩn thận với việc cắt giảm</a></li><li class="chapter-item expanded "><a href="13.html"><strong aria-hidden="true">13.</strong> Chỉ xem một lần thôi</a></li><li class="chapter-item expanded "><a href="14.html"><strong aria-hidden="true">14.</strong> Người nghiện thường</a></li><li class="chapter-item expanded "><a href="15.html"><strong aria-hidden="true">15.</strong> Người nghiện YouTube / Twitch / Instagram</a></li><li class="chapter-item expanded "><a href="16.html"><strong aria-hidden="true">16.</strong> Một thói quen xã hội?</a></li><li class="chapter-item expanded "><a href="17.html"><strong aria-hidden="true">17.</strong> Thời điểm (Timing)</a></li><li class="chapter-item expanded "><a href="18.html"><strong aria-hidden="true">18.</strong> Liệu tôi có bỏ lỡ gì không?</a></li><li class="chapter-item expanded "><a href="19.html"><strong aria-hidden="true">19.</strong> Jekyll và Hyde - Một pha tự bịp</a></li><li class="chapter-item expanded "><a href="20.html"><strong aria-hidden="true">20.</strong> Tránh phần thưởng ảo</a></li><li class="chapter-item expanded "><a href="21.html"><strong aria-hidden="true">21.</strong> Để dừng xem Porn một cách đơn giản</a></li><li class="chapter-item expanded "><a href="22.html"><strong aria-hidden="true">22.</strong> Giai đoạn thoát nghiện</a></li><li class="chapter-item expanded "><a href="23.html"><strong aria-hidden="true">23.</strong> Chỉ xem một lần thôi</a></li><li class="chapter-item expanded "><a href="24.html"><strong aria-hidden="true">24.</strong> Liệu việc dừng xem porn có khó khăn hơn đối với tôi?</a></li><li class="chapter-item expanded "><a href="25.html"><strong aria-hidden="true">25.</strong> Các loại hình porn thay thế</a></li><li class="chapter-item expanded "><a href="26.html"><strong aria-hidden="true">26.</strong> Tôi có nên tránh các tình huống cám dỗ không?</a></li><li class="chapter-item expanded "><a href="27.html"><strong aria-hidden="true">27.</strong> Khoảnh khắc bừng tỉnh</a></li><li class="chapter-item expanded "><a href="28.html"><strong aria-hidden="true">28.</strong> Lần truy cập cuối cùng</a></li><li class="chapter-item expanded "><a href="29.html"><strong aria-hidden="true">29.</strong> Phản hồi</a></li><li class="chapter-item expanded "><a href="30.html"><strong aria-hidden="true">30.</strong> Giúp đỡ những người đang trên con tàu đắm</a></li><li class="chapter-item expanded "><a href="31.html"><strong aria-hidden="true">31.</strong> Lời khuyên dành cho người không xem porn</a></li><li class="chapter-item expanded "><a href="32.html"><strong aria-hidden="true">32.</strong> Các chỉ dẫn</a></li><li class="chapter-item expanded "><a href="33.html"><strong aria-hidden="true">33.</strong> Tài nguyên</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="phu-luc/tai-nghien.html"><strong aria-hidden="true">33.1.</strong> Tái nghiện</a></li><li class="chapter-item expanded "><a href="phu-luc/doi-pho-voi-noi-so.html"><strong aria-hidden="true">33.2.</strong> Đối phó với nỗi sợ</a></li><li class="chapter-item expanded "><a href="phu-luc/appendix.html"><strong aria-hidden="true">33.3.</strong> Thông tin thêm về sách &amp; Chú giải</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
