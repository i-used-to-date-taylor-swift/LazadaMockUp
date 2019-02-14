import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  displayContent = true;
  constructor( private breakpointObserver: BreakpointObserver) { }
  displayFirstGrid = true;
  ulItems = [
    {
      'title': 'Brand',
      'checkBoxItems': ['Yee', 'INCERUN']
    },
    {
      'title': 'Service',
      'checkBoxItems': ['Global Collection', 'Cash on Delivery', 'Fullfilled By Lazada', 'Free Shipping']
    },
    {
      'title': 'Location',
      'checkBoxItems': ['NCR', 'Mindanao', 'South Luzon', 'Overseas']
    },
  ];

  items = [
    {
      'imgSrc': 'https://ph-test-11.slatic.net/p/50888356f893dfe06194bf7eff5e8c46.jpg',
      'alt': 'YEE',
      'description': 'YEE Cotton Jogging Pants #70101（4 color）',
      'price': '199.00'
    },
    {
      'imgSrc': 'https://ph-live-01.slatic.net/original/963503e143743d2431b943fc73c21149.jpg',
      'alt': 'EE Cotton Jogging Trousers With Side Band #70701（4colors）',
      'description': 'YEE Cotton Jogging Trousers With Side Band #70701（4colors）',
      'price': '199.00'
    },
    {
      'imgSrc': 'https://ph-live-01.slatic.net/original/680e0b1668c2cc39c5b54fb1e4974873.jpg',
      'alt': 'Unisex Trendy Quality Jogging Pants Jogger #L-03 XLH trading',
      'description': 'Unisex Trendy Quality Jogging Pants Jogger #L-03 XLH trading',
      'price': '175.00'
    },
    {
      'imgSrc': 'https://ph-test-11.slatic.net/p/ff448065a5cde0d26b595ae32a82ca7d.jpg',
      'alt': 'Unisex Trendy Quality Jogging Pants Jogger #L-03 XLH trading',
      'description': 'Unisex Trendy Quality Jogging Pants Jogger #L-03 XLH trading',
      'price': '157.00'
    },
    {
      'imgSrc': 'https://ph-test-11.slatic.net/p/61d1353aafca46475c3d7c90ceff6eec.jpg',
      'alt': 'Unisex Trendy Quality Jogging Pants Jogger #L-03 XLH trading',
      'description': 'YEE Cotton Jogging Pants #70401（4 color）',
      'price': '199.00'
    },
    {
      'imgSrc': 'https://ph-test-11.slatic.net/p/682bb3fd96a8344dabc70a1be0749881.jpg',
      'alt': 'Unisex Trendy Quality Jogging Pants Jogger #L-03 XLH trading',
      'description': 'JY. Unisex Trendy Quality Jogging Pants Jogger',
      'price': '185.00'
    },
    {
      'imgSrc': 'https://ph-live-01.slatic.net/original/85793545ca2032caa730462d98c86588.jpg',
      'alt': 'Unisex Trendy Quality Jogging Pants Jogger #L-03 XLH trading',
      'description': 'YEE Cotton Jogging Trousers With Side Band #70701（4colors）',
      'price': '199.00'
    },
    {
      'imgSrc': 'https://ph-test-11.slatic.net/p/426fad27c307533e86116bcb1dcbb108.jpg',
      'alt': 'Unisex Trendy Quality Jogging Pants Jogger #L-03 XLH trading',
      'description': 'Unisex plain cotton jogger pants jagger pants  jogging',
      'price': '169.00'
    },
    {
      'imgSrc': 'https://ph-test-11.slatic.net/p/32d3424e7ca13650ffa06d9232299253.jpg',
      'alt': 'xxxx',
      'description': 'Unisex Trendy Quality Jogging Pants Jogger',
      'price': '168.75'
    },
    {
      'imgSrc': 'https://ph-test-11.slatic.net/p/4dad09e45dafef57a7f154c81c1a9a8f.jpg',
      'alt': 'xxxx',
      'description': '#GIANT PANDA# Specifications of #GIANT PANDA# Trousers...',
      'price': '157'
    },
    {
      'imgSrc': 'https://ph-test-11.slatic.net/p/3bd43e67d616b48eae64858fd467994a.jpg',
      'alt': 'xxxx',
      'description': 'Off Black Popular Brand White Sports Casual Ankle Banded Pants M...',
      'price': '2,589.00'
    },
    {
      'imgSrc': 'https://my-live-02.slatic.net/original/3cfa2733727e4e3f91a049089f3afefd.jpg',
      'alt': 'xxx',
      'description': 'Men Jogging Sports Training Sweat Pants Tracksuit Bottoms Jogger Casual Trousers',
      'price': '588'
    },
    {
      'imgSrc': 'https://my-live-02.slatic.net/original/3cfa2733727e4e3f91a049089f3afefd.jpg',
      'alt': 'xxx',
      'description': 'Men Jogging Sports Training Sweat Pants Tracksuit Bottoms Jogger Casual Trousers',
      'price': '588'
    },
    {
      'imgSrc': 'https://my-live-02.slatic.net/original/3cfa2733727e4e3f91a049089f3afefd.jpg',
      'alt': 'xxx',
      'description': 'Men Jogging Sports Training Sweat Pants Tracksuit Bottoms Jogger Casual Trousers',
      'price': '588'
    },
    {
      'imgSrc': 'https://my-live-02.slatic.net/original/3cfa2733727e4e3f91a049089f3afefd.jpg',
      'alt': 'xxx',
      'description': 'Men Jogging Sports Training Sweat Pants Tracksuit Bottoms Jogger Casual Trousers',
      'price': '588'
    },
    {
      'imgSrc': 'https://my-live-02.slatic.net/original/3cfa2733727e4e3f91a049089f3afefd.jpg',
      'alt': 'xxx',
      'description': 'Men Jogging Sports Training Sweat Pants Tracksuit Bottoms Jogger Casual Trousers',
      'price': '588'
    },
    {
      'imgSrc': 'https://ph-test-11.slatic.net/p/426fad27c307533e86116bcb1dcbb108.jpg',
      'alt': 'Unisex Trendy Quality Jogging Pants Jogger #L-03 XLH trading',
      'description': 'Unisex plain cotton jogger pants jagger pants  jogging really long description this is none sence just',
      'price': '169.00'
    },

  ];

  ngOnInit() {
    this.setDisplayForSmallDevices();
  }

  setDisplayForSmallDevices() {
    this.breakpointObserver
    .observe(['(max-width: 768px)'])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.displayContent = false;
      } else {
        this.displayContent = true;
      }
    });
  }



  getDescription(description: string) {
    if ( description.length > 39 ) {
      const trimmedString = description.substring(0, 39);
      return trimmedString.concat(' ...');
    }
    return description;
  }
}
